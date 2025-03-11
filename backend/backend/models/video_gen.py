import torch
import subprocess
from diffusers import StableDiffusionPipeline, StableVideoDiffusionPipeline
from PIL import Image
from models.tts import generate_voiceover

# Load AI models
SDXL_PATH = "stable-diffusion-xl-base-1.0"
SVD_PATH = "stable-video-diffusion-img2vid"

txt2img_pipe = StableDiffusionPipeline.from_pretrained(SDXL_PATH, torch_dtype=torch.float16).to("cuda")
vid_pipe = StableVideoDiffusionPipeline.from_pretrained(SVD_PATH, torch_dtype=torch.float16).to("cuda")

def enhance_video(input_video, output_video, target_resolution="1920x1080", fps=30):
    """Upscale video and increase FPS using FFmpeg"""
    command = [
        "ffmpeg", "-i", input_video, 
        "-vf", f"scale={target_resolution}:flags=lanczos,fps={fps}", 
        "-c:v", "libx264", "-preset", "slow", "-crf", "18", 
        output_video
    ]
    subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def merge_video_audio(video_path, audio_path, output_path="final_output.mp4"):
    """Merge AI-generated video with AI-generated voiceover"""
    command = [
        "ffmpeg", "-i", video_path, "-i", audio_path,
        "-c:v", "copy", "-c:a", "aac", "-strict", "experimental",
        output_path
    ]
    subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def generate_video_with_audio(input_type, input_value, text, output_video="final_video.mp4"):
    temp_video = "temp_video.mp4"
    temp_audio = "temp_audio.mp3"

    if input_type == "text":
        image = txt2img_pipe(input_value).images[0]
    elif input_type == "image":
        image = Image.open(input_value).convert("RGB")
    else:
        return "Error: Invalid input type"

    with torch.no_grad():
        video = vid_pipe(image, decode_chunk_size=8).videos  
    video[0].save(temp_video)  

    generate_voiceover(text, temp_audio)
    merge_video_audio(temp_video, temp_audio, output_video)

    return output_video
