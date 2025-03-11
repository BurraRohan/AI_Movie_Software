from gtts import gTTS

def generate_voiceover(text, output_audio="output.mp3"):
    tts = gTTS(text=text, lang="en")
    tts.save(output_audio)
    return output_audio
