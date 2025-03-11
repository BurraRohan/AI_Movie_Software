from flask import Blueprint, request, jsonify
from models.tts import generate_voiceover

voice_bp = Blueprint("voice", __name__)

@voice_bp.route("/generate_voice", methods=["POST"])
def voice():
    data = request.json
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    audio_path = generate_voiceover(text)
    return jsonify({"audio_url": f"/static/{audio_path}"})
