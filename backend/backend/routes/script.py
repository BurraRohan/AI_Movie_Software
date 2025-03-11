from flask import Blueprint, request, jsonify
from models.script_model import generate_script

script_bp = Blueprint("script", __name__)

@script_bp.route("/generate_script", methods=["POST"])
def script():
    data = request.json
    story_idea = data.get("story_idea", "")

    if not story_idea:
        return jsonify({"error": "No story idea provided"}), 400

    script_text = generate_script(story_idea)
    return jsonify({"script": script_text})
