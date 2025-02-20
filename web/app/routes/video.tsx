import { createFileRoute } from "@tanstack/react-router"

const VideoCapture = () => {
  const handleVideoCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log("Captured video file:", file)
      // You can add further processing of the captured video file here
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoCapture}
      />
    </div>
  )
}

export const Route = createFileRoute("/")({
  component: VideoCapture,
})
