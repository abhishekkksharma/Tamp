import { useEffect } from "react";

function Instagram() {
  useEffect(() => {
    // Dynamically load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center items-center gap-8">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DPJqYhJCGRm/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px auto",
            maxWidth: "180px",
            minWidth: "100px",
            padding: 0,
            width: "calc(100% - 2px)",
          }}
        ></blockquote>

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DPJqYhJCGRm/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px auto",
            maxWidth: "180px",
            minWidth: "100px",
            padding: 0,
            width: "calc(100% - 2px)",
          }}
        ></blockquote>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DPJqYhJCGRm/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px auto",
            maxWidth: "180px",
            minWidth: "100px",
            padding: 0,
            width: "calc(100% - 2px)",
          }}
        ></blockquote>
    </div>
  );
}

export default Instagram;
