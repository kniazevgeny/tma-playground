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
  const [presets, setPresets] = useState<{ name: string; id: number, exec: () => any }[]>([
    { name: "main button", id: 0, exec: setBottomButton },
    { name: "main button + secondary", id: 1, exec: set2BottomButtons },
    { name: "back button", id: 2, exec: () => {} },
    { name: "settings button", id: 3, exec: () => {} },
  ])

  useEffect(() => {
    try {
      sdk.init()
    } catch (e) {}
    setSdkKeys(Object.keys(sdk).map((el, id) => ({ name: el, id: id })))

    if (tma) {
      console.log(tma)
    }
  }, [tma])

  useEffect(() => {
    if (Array.from(selectedPerset)[0] as number > 0)
      presets[Array.from(selectedPerset)[0] as number].exec()
  }, [selectedPerset])

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

  function set2BottomButtons() {
    if (!tma) {
      alert("The app runs outside of the telegram")
      return
    }
    setBottomButton()
    sdk.secondaryButton.mount()
    sdk.setSecondaryButtonParams({
      isEnabled: false,
      text: "тест disabled",
      isVisible: true,
      textColor: "#fff5e1",
      backgroundColor: "#111",
      hasShineEffect: false,
    })
  }

  return (
    <div className="dark pt-4 min-h-screen bg-bg text-fg font-serif flex flex-col justify-center items-center">
      Hello there
      <Select
        label="Design software"
        placeholder="Select a software"
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
