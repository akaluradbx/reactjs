import React from "react";
import "@radix-ui/themes/styles.css";
import {
  AreaChart,
  AreaChart as RechartsAreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadialBarChart,
  RadialBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  ZAxis,
  Scatter,
  Treemap,
} from "recharts";

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
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import * as Popover from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Slider from "@radix-ui/react-slider";
import { Cross2Icon, CheckIcon } from "@radix-ui/react-icons";
import "./styles.css"; // see below for styles





const cardStyle = {
  background: "#fff",
  borderRadius: 8,
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  padding: 24,
  width: "100%",
  maxWidth: 800,
};



export function Xx({ data }) {
  return (
    <div>

      {/* Bar Chart (mainData) */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>Bar Chart Example</h2>
      <div style={cardStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}


export function MyButton({ param1 }) {
  return (
    <div>
      
        {/* Radix Themes Button */}
        <Button>Hey 👋</Button>

        {/* Radix Themes Card and Grid */}
        <Card size="2" style={{ maxWidth: 400 }}>
          <Flex gap="4" direction="column">
            <Heading as="h5" size="2">
              Regular card
            </Heading>
            <Grid columns="2" gap="2">
              <Text>Item 1</Text>
              <Text>Item 2</Text>
              <Text>Item 3</Text>
              <Text>Item 4</Text>
            </Grid>
            <TextArea placeholder="Type your feedback…" />
          </Flex>
        </Card>


    </div>
  );
}

export function MyDialog({ param1 }) {
  return (
    <div>
      
        {/* Radix Primitives Dialog */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="solid" color="violet">
              Open Dialog
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description>
              <Flex direction="column" gap="2">
                <label>
                  Name
                  <input className="Input" defaultValue="Pedro Duarte" />
                </label>
                <label>
                  Username
                  <input className="Input" defaultValue="@peduarte" />
                </label>
              </Flex>
              <Flex gap="2" mt="4" justify="end">
                <Dialog.Close asChild>
                  <Button variant="solid" color="green">
                    Save changes
                  </Button>
                </Dialog.Close>
              </Flex>
              <Dialog.Close asChild>
                <button className="IconButton" aria-label="Close">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>


    </div>
  );
}


export function MyAccordion({ param1 }) {
  return (
    <div>
      
        {/* Radix Primitives Accordion */}
        <Accordion.Root type="single" defaultValue="item-1" collapsible className="AccordionRoot">
          <Accordion.Item value="item-1">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger">
                Accordion Item 1
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              This is the content for item 1.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger">
                Accordion Item 2
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              This is the content for item 2.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>


    </div>
  );
}


export function MyPopover({ param1 }) {
  return (
    <div>
      
        {/* Radix Primitives Popover */}
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="soft" color="indigo">
              Show Popover
            </Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent" sideOffset={5}>
              <Text>This is a popover!</Text>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>


    </div>
  );
}

export function MyCheckbox({ param1 }) {
  return (
    <div>


        {/* Radix Primitives Checkbox */}
        <Flex align="center" gap="2">
          <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
            <Checkbox.Indicator className="CheckboxIndicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="c1">Accept terms and conditions</label>
        </Flex>

        {/* Radix Primitives Slider */}
        <Flex direction="column" gap="2">
          <Text>Volume</Text>
          <Slider.Root
            className="SliderRoot"
            defaultValue={[50]}
            max={100}
            step={1}
            aria-label="Volume"
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" />
          </Slider.Root>
        </Flex>


    </div>
  );
}

export function MySlider({ param1 }) {
  return (
    <div>

        {/* Radix Primitives Slider */}
        <Flex direction="column" gap="2">
          <Text>Volume</Text>
          <Slider.Root
            className="SliderRoot"
            defaultValue={[50]}
            max={100}
            step={1}
            aria-label="Volume"
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" />
          </Slider.Root>
        </Flex>


    </div>
  );
}


export default function App() {
  return (
    <Theme>
      <Flex direction="column" gap="6" p="6" align="start">
        <MyButton />
        <MyDialog />
        <MyAccordion />
        <MyPopover />
        <MyCheckbox />
        <MySlider />
      </Flex>
    </Theme>
  );
}
