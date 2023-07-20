

interface LazyIframeProps {
    url: string,
    title: string
}

export default function Video({ url, title }:LazyIframeProps) {
    
    return (
          <iframe
            src={url}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
    )
}



