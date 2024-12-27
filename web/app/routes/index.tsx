import { createFileRoute } from "@tanstack/react-router"
import * as sdk from "@telegram-apps/sdk-react"
import { useEffect } from "react"

export const Route = createFileRoute("/")({
  component: PlaygroundPage,
})

function PlaygroundPage() {
  let tma: any = null
  try {
    tma = sdk.useLaunchParams()
  } catch (e) {
    console.log("The app runs outside of the telegram")
  }

  useEffect(() => {
    sdk.init()

    if (tma) {
      console.log(tma)
      console.log(Object.keys(sdk))
    }
  }, [tma])

  function setBottomButton() {
    if (!tma) {
      alert("The app runs outside of the telegram")
      return
    }
    sdk.mainButton.mount()
    sdk.setMainButtonParams({
      isEnabled: true,
      text: "тест",
      isVisible: true,
      textColor: "#fff5e1",
      backgroundColor: "#111",
      hasShineEffect: true,
    })
  }

  return (
    <div className="dark pt-4 min-h-screen bg-bg text-fg font-serif flex flex-col justify-center items-center">
      Hello there
      <div onClick={setBottomButton} className="hover:cursor-pointer">
        set main button
      </div>
    </div>
  )
}
