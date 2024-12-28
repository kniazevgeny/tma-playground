import { createFileRoute } from "@tanstack/react-router"
import * as sdk from "@telegram-apps/sdk-react"
import { useEffect, useState } from "react"
import { ListBox, Select } from "~/components/ui"
import type { Selection } from "react-aria-components"

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

  const [sdkKeys, setSdkKeys] = useState<{ name: string; id: number }[]>([
    { name: "nothing here", id: 0 },
  ])
  const [selected, setSelected] = useState<Selection>(new Set([1]))
  const [selectedPerset, setSelectedPreset] = useState<Selection>(new Set([-1]))
  const [presets, setPresets] = useState<
    { name: string; id: number; exec: () => any }[]
  >([
    { name: "main button", id: 0, exec: setBottomButton },
    { name: "main button + secondary", id: 1, exec: set2BottomButtons },
    { name: "back button", id: 2, exec: setBackButton },
    { name: "settings button", id: 3, exec: setSettingsButton },
    { name: "header color orange", id: 4, exec: setHeaderColor },
    { name: "header color bkg", id: 5, exec: setHeaderColorBkg },
    { name: "share to stories", id: 6, exec: shareToStories },
    { name: "share message (v1)", id: 7, exec: shareMessage },
  ])

  useEffect(() => {
    try {
      sdk.init()
      sdk.miniApp.mount()
      sdk.mainButton.mount()
      sdk.secondaryButton.mount()

      //@ts-ignore
      sdk.on('shareMessageSent', (e) => console.log('message sent!'))
      //@ts-ignore
      sdk.on('shareMessageFailed', (e: {error: string}) => console.log('message not sent', e.error))

    } catch (e) {}
    setSdkKeys(Object.keys(sdk).map((el, id) => ({ name: el, id: id })))

    if (tma) {
      console.log(tma)
    }
  }, [tma])

  useEffect(() => {
    if ((Array.from(selectedPerset)[0] as number) >= 0)
      presets[Array.from(selectedPerset)[0] as number].exec()
  }, [selectedPerset])

  function setBottomButton() {
    sdk.setMainButtonParams({
      isEnabled: true,
      text: "test",
      isVisible: true,
      textColor: "#fff5e1",
      backgroundColor: "#111",
      hasShineEffect: false,
    })

    sdk.setSecondaryButtonParams({ isVisible: false })
  }

  function set2BottomButtons() {
    setBottomButton()
    sdk.setSecondaryButtonParams({
      isEnabled: false,
      text: "тест disabled",
      isVisible: true,
      textColor: "#fff5e1",
      backgroundColor: "#111",
      hasShineEffect: false,
    })

    sdk.setMainButtonParams({
      isEnabled: true,
      text: "убрать кнопки",
      isVisible: true,
      textColor: "#fff5e1",
      backgroundColor: "#111",
      hasShineEffect: false,
    })
    sdk.mainButton.onClick(() => {
      sdk.setSecondaryButtonParams({
        isVisible: false,
      })

      sdk.setMainButtonParams({
        isVisible: false,
      })

      sdk.mainButton.onClick(() => {})
    })
  }

  function setBackButton() {
    sdk.backButton.mount()
    sdk.backButton.show()
    sdk.backButton.onClick(() => sdk.backButton.hide())
  }

  function setSettingsButton() {
    sdk.settingsButton.mount()
    sdk.settingsButton.show()
    sdk.settingsButton.onClick(() => alert("settings btn clicked"))
  }

  function setHeaderColor() {
    sdk.setMiniAppHeaderColor("#f98e29")
  }

  function setHeaderColorBkg() {
    sdk.setMiniAppHeaderColor("#383838")
  }

  function shareToStories() {
    sdk.shareStory.ifAvailable("https://images.unsplash.com/photo-1733860694060-e10fabd4e2b1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=pars-sahin-hDwag975ohY-unsplash.jpg&w=640", {
      text: "Today was a good day. Love it! Thanks to this public!",
      widgetLink: {
        url: "https://t.me/tma_playground_bot",
        name: "check out this mini-app",
      },
    })
  }

  function shareMessage() {
    //@ts-ignore
    // sdk.shareMessage('cuUGXICud6q63eEj')
    window.Telegram.WebView.postEvent('web_app_send_prepared_message', false, {id: 'cuUGXICud6q63eEj'});
  }

  return (
    <div className="dark pt-4 min-h-screen bg-bg text-fg font-serif flex flex-col justify-center items-center">
      Hello there
      <Select
        label="Manual method testing"
        placeholder="Select a method"
        className="max-w-[400px]"
      >
        <Select.Trigger />
        <Select.List items={sdkKeys}>
          {(item) => (
            <Select.Option id={item.id} textValue={item.name}>
              {item.name}
            </Select.Option>
          )}
        </Select.List>
      </Select>
      <p>Or select a preset below:</p>
      <ListBox
        selectedKeys={selectedPerset}
        onSelectionChange={setSelectedPreset}
        items={presets}
        aria-label="SDK Keys"
        selectionMode="single"
        className="max-w-[400px]"
      >
        {(option) => (
          <ListBox.Item id={option.id} textValue={option.name}>
            {option.name}
          </ListBox.Item>
        )}
      </ListBox>
    </div>
  )
}
