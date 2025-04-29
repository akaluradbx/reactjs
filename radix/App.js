import * as React from "react";
import classNames from "classnames";
import classnames from "classnames";

import { Menubar,
  NavigationMenu,
  Progress,
  Label,
  RadioGroup,
  ScrollArea,
  Select,
  Tabs,
  Toolbar,
  Tooltip,
  ToggleGroup,
  Toggle,
  Switch,
  Slider,
  Separator,
  Popover,
  HoverCard,
  Form,
  DropdownMenu,
  Avatar,
  AspectRatio,
  Accordion,
  AlertDialog,
  Checkbox,
  Collapsible,
  ContextMenu,
  Dialog,
  } from "radix-ui";

import {
  CheckIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DotFilledIcon,
  CaretDownIcon,
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
  PlusIcon,
  MixerHorizontalIcon, 
  Cross2Icon,
  HamburgerMenuIcon,
  RowSpacingIcon,
} from "@radix-ui/react-icons";

import {
  Theme,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Grid,
  TextArea,
} from "@radix-ui/themes";


import "./styles.css";


const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <Menubar.Root className="MenubarRoot">
      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">File</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="MenubarContent"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            <Menubar.Item className="MenubarItem">
              New Tab <div className="RightSlot">⌘ T</div>
            </Menubar.Item>
            <Menubar.Item className="MenubarItem">
              New Window <div className="RightSlot">⌘ N</div>
            </Menubar.Item>
            <Menubar.Item className="MenubarItem" disabled>
              New Incognito Window
            </Menubar.Item>
            <Menubar.Separator className="MenubarSeparator" />
            <Menubar.Sub>
              <Menubar.SubTrigger className="MenubarSubTrigger">
                Share
                <div className="RightSlot">
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent
                  className="MenubarSubContent"
                  alignOffset={-5}
                >
                  <Menubar.Item className="MenubarItem">
                    Email Link
                  </Menubar.Item>
                  <Menubar.Item className="MenubarItem">Messages</Menubar.Item>
                  <Menubar.Item className="MenubarItem">Notes</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator className="MenubarSeparator" />
            <Menubar.Item className="MenubarItem">
              Print… <div className="RightSlot">⌘ P</div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">Edit</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="MenubarContent"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            <Menubar.Item className="MenubarItem">
              Undo <div className="RightSlot">⌘ Z</div>
            </Menubar.Item>
            <Menubar.Item className="MenubarItem">
              Redo <div className="RightSlot">⇧ ⌘ Z</div>
            </Menubar.Item>
            <Menubar.Separator className="MenubarSeparator" />
            <Menubar.Sub>
              <Menubar.SubTrigger className="MenubarSubTrigger">
                Find
                <div className="RightSlot">
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>

              <Menubar.Portal>
                <Menubar.SubContent
                  className="MenubarSubContent"
                  alignOffset={-5}
                >
                  <Menubar.Item className="MenubarItem">
                    Search the web…
                  </Menubar.Item>
                  <Menubar.Separator className="MenubarSeparator" />
                  <Menubar.Item className="MenubarItem">Find…</Menubar.Item>
                  <Menubar.Item className="MenubarItem">Find Next</Menubar.Item>
                  <Menubar.Item className="MenubarItem">
                    Find Previous
                  </Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator className="MenubarSeparator" />
            <Menubar.Item className="MenubarItem">Cut</Menubar.Item>
            <Menubar.Item className="MenubarItem">Copy</Menubar.Item>
            <Menubar.Item className="MenubarItem">Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">View</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="MenubarContent"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            {CHECK_ITEMS.map((item) => (
              <Menubar.CheckboxItem
                className="MenubarCheckboxItem inset"
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item),
                  )
                }
              >
                <Menubar.ItemIndicator className="MenubarItemIndicator">
                  <CheckIcon />
                </Menubar.ItemIndicator>
                {item}
              </Menubar.CheckboxItem>
            ))}
            <Menubar.Separator className="MenubarSeparator" />
            <Menubar.Item className="MenubarItem inset">
              Reload <div className="RightSlot">⌘ R</div>
            </Menubar.Item>
            <Menubar.Item className="MenubarItem inset" disabled>
              Force Reload <div className="RightSlot">⇧ ⌘ R</div>
            </Menubar.Item>
            <Menubar.Separator className="MenubarSeparator" />
            <Menubar.Item className="MenubarItem inset">
              Toggle Fullscreen
            </Menubar.Item>
            <Menubar.Separator className="MenubarSeparator" />
            <Menubar.Item className="MenubarItem inset">
              Hide Sidebar
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">Profiles</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="MenubarContent"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            <Menubar.RadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {RADIO_ITEMS.map((item) => (
                <Menubar.RadioItem
                  className="MenubarRadioItem inset"
                  key={item}
                  value={item}
                >
                  <Menubar.ItemIndicator className="MenubarItemIndicator">
                    <DotFilledIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.RadioItem>
              ))}
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem inset">Edit…</Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem inset">
                Add Profile…
              </Menubar.Item>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};


const LabelDemo = () => (
  <div
    style={{
      display: "flex",
      padding: "0 20px",
      flexWrap: "wrap",
      gap: 15,
      alignItems: "center",
    }}
  >
    <Label.Root className="LabelRoot" htmlFor="firstName">
      First name
    </Label.Root>
    <input
      className="Input"
      type="text"
      id="firstName"
      defaultValue="Pedro Duarte"
    />
  </div>
);







const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Learn <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Overview <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);



const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root className="ProgressRoot" value={progress}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};


const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="RadioGroupRoot"
      defaultValue="default"
      aria-label="View density"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r1">
          Default
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);


const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const ScrollAreaDemo = () => (
  <ScrollArea.Root className="ScrollAreaRoot">
    <ScrollArea.Viewport className="ScrollAreaViewport">
      <div style={{ padding: "15px 20px" }}>
        <div className="Text">Tags</div>
        {TAGS.map((tag) => (
          <div className="Tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      className="ScrollAreaScrollbar"
      orientation="vertical"
    >
      <ScrollArea.Thumb className="ScrollAreaThumb" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar
      className="ScrollAreaScrollbar"
      orientation="horizontal"
    >
      <ScrollArea.Thumb className="ScrollAreaThumb" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner className="ScrollAreaCorner" />
  </ScrollArea.Root>
);




const SelectDemo = () => (
  <Select.Root>
    <Select.Trigger className="SelectTrigger" aria-label="Food">
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport">
          <Select.Group>
            <Select.Label className="SelectLabel">Fruits</Select.Label>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Select.Group>

          <Select.Separator className="SelectSeparator" />

          <Select.Group>
            <Select.Label className="SelectLabel">Vegetables</Select.Label>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" disabled>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">Leek</SelectItem>
          </Select.Group>

          <Select.Separator className="SelectSeparator" />

          <Select.Group>
            <Select.Label className="SelectLabel">Meat</Select.Label>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);


const TabsDemo = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Account
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Password
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <p className="Text">
        Make changes to your account here. Click save when you're done.
      </p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="@peduarte" />
      </fieldset>
      <div
        style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
      >
        <button className="Button green">Save changes</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <p className="Text">
        Change your password here. After saving, you'll be logged out.
      </p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Current password
        </label>
        <input className="Input" id="currentPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          New password
        </label>
        <input className="Input" id="newPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Confirm password
        </label>
        <input className="Input" id="confirmPassword" type="password" />
      </fieldset>
      <div
        style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
      >
        <button className="Button green">Change password</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);



const ToolbarDemo = () => (
  <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options">
    <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
      <Toolbar.ToggleItem
        className="ToolbarToggleItem"
        value="bold"
        aria-label="Bold"
      >
        <FontBoldIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem
        className="ToolbarToggleItem"
        value="italic"
        aria-label="Italic"
      >
        <FontItalicIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem
        className="ToolbarToggleItem"
        value="strikethrough"
        aria-label="Strike through"
      >
        <StrikethroughIcon />
      </Toolbar.ToggleItem>
    </Toolbar.ToggleGroup>
    <Toolbar.Separator className="ToolbarSeparator" />
    <Toolbar.ToggleGroup
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <Toolbar.ToggleItem
        className="ToolbarToggleItem"
        value="left"
        aria-label="Left aligned"
      >
        <TextAlignLeftIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem
        className="ToolbarToggleItem"
        value="center"
        aria-label="Center aligned"
      >
        <TextAlignCenterIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem
        className="ToolbarToggleItem"
        value="right"
        aria-label="Right aligned"
      >
        <TextAlignRightIcon />
      </Toolbar.ToggleItem>
    </Toolbar.ToggleGroup>
    <Toolbar.Separator className="ToolbarSeparator" />
    <Toolbar.Link
      className="ToolbarLink"
      href="#"
      target="_blank"
      style={{ marginRight: 10 }}
    >
      Edited 2 hours ago
    </Toolbar.Link>
    <Toolbar.Button className="ToolbarButton" style={{ marginLeft: "auto" }}>
      Share
    </Toolbar.Button>
  </Toolbar.Root>
);




const TooltipDemo = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="IconButton">
            <PlusIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            Add to library
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};




const ToggleGroupDemo = () => (
  <ToggleGroup.Root
    className="ToggleGroup"
    type="single"
    defaultValue="center"
    aria-label="Text alignment"
  >
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="left"
      aria-label="Left aligned"
    >
      <TextAlignLeftIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="center"
      aria-label="Center aligned"
    >
      <TextAlignCenterIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="right"
      aria-label="Right aligned"
    >
      <TextAlignRightIcon />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);



const ToggleDemo = () => (
  <Toggle.Root className="Toggle" aria-label="Toggle italic">
    <FontItalicIcon />
  </Toggle.Root>
);





const SwitchDemo = () => (
  <form>
    <div style={{ display: "flex", alignItems: "center" }}>
      <label
        className="Label"
        htmlFor="airplane-mode"
        style={{ paddingRight: 15 }}
      >
        Airplane mode
      </label>
      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  </form>
);




const SliderDemo = () => (
  <form>
    <Slider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1}>
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  </form>
);



const SeparatorDemo = () => (
  <div style={{ width: "100%", maxWidth: 300, margin: "0 15px" }}>
    <div className="Text" style={{ fontWeight: 500 }}>
      Radix Primitives
    </div>
    <div className="Text">An open-source UI component library.</div>
    <Separator.Root className="SeparatorRoot" style={{ margin: "15px 0" }} />
    <div style={{ display: "flex", height: 20, alignItems: "center" }}>
      <div className="Text">Blog</div>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: "0 15px" }}
      />
      <div className="Text">Docs</div>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: "0 15px" }}
      />
      <div className="Text">Source</div>
    </div>
  </div>
);




const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className="IconButton" aria-label="Update dimensions">
        <MixerHorizontalIcon />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p className="Text" style={{ marginBottom: 10 }}>
            Dimensions
          </p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="width">
              Width
            </label>
            <input className="Input" id="width" defaultValue="100%" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="maxWidth">
              Max. width
            </label>
            <input className="Input" id="maxWidth" defaultValue="300px" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="height">
              Height
            </label>
            <input className="Input" id="height" defaultValue="25px" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="maxHeight">
              Max. height
            </label>
            <input className="Input" id="maxHeight" defaultValue="none" />
          </fieldset>
        </div>
        <Popover.Close className="PopoverClose" aria-label="Close">
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);



const HoverCardDemo = () => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <a
        className="ImageTrigger"
        href="https://twitter.com/radix_ui"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="Image normal"
          src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          alt="Radix UI"
        />
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="HoverCardContent" sideOffset={5}>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <img
            className="Image large"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            alt="Radix UI"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <div>
              <div className="Text bold">Radix</div>
              <div className="Text faded">@radix_ui</div>
            </div>
            <div className="Text">
              Components, icons, colors, and templates for building
              high-quality, accessible UI. Free and open-source.
            </div>
            <div style={{ display: "flex", gap: 15 }}>
              <div style={{ display: "flex", gap: 5 }}>
                <div className="Text bold">0</div>{" "}
                <div className="Text faded">Following</div>
              </div>
              <div style={{ display: "flex", gap: 5 }}>
                <div className="Text bold">2,900</div>{" "}
                <div className="Text faded">Followers</div>
              </div>
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="HoverCardArrow" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);


const FormDemo = () => (
  <Form.Root className="FormRoot">
    <Form.Field className="FormField" name="email">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">Email</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="Input" type="email" required />
      </Form.Control>
    </Form.Field>
    <Form.Field className="FormField" name="question">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">Question</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className="Textarea" required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="Button" style={{ marginTop: 10 }}>
        Post question
      </button>
    </Form.Submit>
  </Form.Root>
);



const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              More Tools
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="DropdownMenuItem">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="DropdownMenu.Separator" />
                <DropdownMenu.Item className="DropdownMenuItem">
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Label className="DropdownMenuLabel">
            People
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem
              className="DropdownMenuRadioItem"
              value="pedro"
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="DropdownMenuRadioItem"
              value="colm"
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};



const AvatarDemo = () => (
  <div style={{ display: "flex", gap: 20 }}>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        CT
      </Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        JD
      </Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Fallback className="AvatarFallback">PD</Avatar.Fallback>
    </Avatar.Root>
  </div>
);


const AspectRatioDemo = () => (
  <div className="Container">
    <AspectRatio.Root ratio={16 / 9}>
      <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
    </AspectRatio.Root>
  </div>
);




const AccordionDemo = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  ),
);



const AlertDialogDemo = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="Button violet">Delete account</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">
          Are you absolutely sure?
        </AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialog.Description>
        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <button className="Button mauve">Cancel</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="Button red">Yes, delete account</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);



const CheckboxDemo = () => (
  <form>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  </form>
);



const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="Text" style={{ color: "white" }}>
          @peduarte starred 3 repositories
        </span>
        <Collapsible.Trigger asChild>
          <button className="IconButton">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      <div className="Repository">
        <span className="Text">@radix-ui/primitives</span>
      </div>

      <Collapsible.Content>
        <div className="Repository">
          <span className="Text">@radix-ui/colors</span>
        </div>
        <div className="Repository">
          <span className="Text">@radix-ui/themes</span>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};




const ContextMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="ContextMenuTrigger">
        Right-click here.
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content
          className="ContextMenuContent"
          sideOffset={5}
          align="end"
        >
          <ContextMenu.Item className="ContextMenuItem">
            Back <div className="RightSlot">⌘+[</div>
          </ContextMenu.Item>
          <ContextMenu.Item className="ContextMenuItem" disabled>
            Forward <div className="RightSlot">⌘+]</div>
          </ContextMenu.Item>
          <ContextMenu.Item className="ContextMenuItem">
            Reload <div className="RightSlot">⌘+R</div>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
              More Tools
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent
                className="ContextMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <ContextMenu.Item className="ContextMenuItem">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </ContextMenu.Item>
                <ContextMenu.Item className="ContextMenuItem">
                  Create Shortcut…
                </ContextMenu.Item>
                <ContextMenu.Item className="ContextMenuItem">
                  Name Window…
                </ContextMenu.Item>
                <ContextMenu.Separator className="ContextMenuSeparator" />
                <ContextMenu.Item className="ContextMenuItem">
                  Developer Tools
                </ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>

          <ContextMenu.Separator className="ContextMenuSeparator" />

          <ContextMenu.CheckboxItem
            className="ContextMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            className="ContextMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Full URLs
          </ContextMenu.CheckboxItem>

          <ContextMenu.Separator className="ContextMenuSeparator" />

          <ContextMenu.Label className="ContextMenuLabel">
            People
          </ContextMenu.Label>
          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <ContextMenu.RadioItem
              className="ContextMenuRadioItem"
              value="pedro"
            >
              <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Pedro Duarte
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem
              className="ContextMenuRadioItem"
              value="colm"
            >
              <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Colm Tuite
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};



const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">Name</label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);


export default function App() {
  return (
    <Theme>
      {/*}
      <MenubarDemo />
      <LabelDemo />
      <NavigationMenuDemo />
      <ProgressDemo />
      <RadioGroupDemo />
      <ScrollAreaDemo />
      <SelectDemo />
      <TabsDemo />
      <ToolbarDemo />
      <TooltipDemo />
      <ToggleGroupDemo />
      <ToggleDemo />
      <SwitchDemo />
      <SliderDemo />
      <SeparatorDemo />
      <PopoverDemo />
      <HoverCardDemo />
      <FormDemo />
      <DropdownMenuDemo />
      <AvatarDemo />
      <AspectRatioDemo />
      <AccordionDemo />
      <AlertDialogDemo />
      <CheckboxDemo />
      <CollapsibleDemo />
      <ContextMenuDemo />
      */}
     
     
     
     <DialogDemo />
    </Theme>
  );
}







