from flask import Blueprint, request, jsonify
from models.video_gen import generate_video_with_audio

video_bp = Blueprint("video", __name__)

@video_bp.route("/generate_video_with_audio", methods=["POST"])
def video_with_audio():
    data = request.json
    input_type = data.get("input_type", "")  
    input_value = data.get("input_value", "")  
    narration_text = data.get("narration_text", "")  

    if not input_type or not input_value or not narration_text:
        return jsonify({"error": "Invalid input"}), 400

    video_path = generate_video_with_audio(input_type, input_value, narration_text)
    return jsonify({"video_url": f"/static/{video_path}"})
