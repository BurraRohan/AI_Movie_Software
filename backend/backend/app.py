from flask import Flask
from routes.script import script_bp
from routes.video import video_bp
from routes.voice import voice_bp

app = Flask(__name__)

# Register API routes
app.register_blueprint(script_bp, url_prefix="/api")
app.register_blueprint(video_bp, url_prefix="/api")
app.register_blueprint(voice_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True)
