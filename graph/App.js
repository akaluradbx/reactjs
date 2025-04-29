import React from "react";
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

// Main data for Area, Bar, Line, and Composed charts
const mainData = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

// Temperature range data
const rangeDataRaw = [
  { day: "05-01", temperature: [-1, 10] },
  { day: "05-02", temperature: [2, 15] },
  { day: "05-03", temperature: [3, 12] },
  { day: "05-04", temperature: [4, 12] },
  { day: "05-05", temperature: [12, 16] },
  { day: "05-06", temperature: [5, 16] },
  { day: "05-07", temperature: [3, 12] },
  { day: "05-08", temperature: [0, 8] },
  { day: "05-09", temperature: [-3, 5] },
];
const rangeData = rangeDataRaw.map((d) => ({
  day: d.day,
  tempLow: d.temperature[0],
  tempHigh: d.temperature[1],
  tempRange: d.temperature[1] - d.temperature[0],
}));

// Pie chart data
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];
const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

// Radar chart data
const radarData = [
  { subject: "Math", A: 120, B: 110, fullMark: 150 },
  { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
  { subject: "English", A: 86, B: 130, fullMark: 150 },
  { subject: "Geography", A: 99, B: 100, fullMark: 150 },
  { subject: "Physics", A: 85, B: 90, fullMark: 150 },
  { subject: "History", A: 65, B: 85, fullMark: 150 },
];

// Radial bar chart data
const radialData = [
  { name: "18-24", uv: 31.47, pv: 2400, fill: "#8884d8" },
  { name: "25-29", uv: 26.69, pv: 4567, fill: "#83a6ed" },
  { name: "30-34", uv: -15.69, pv: 1398, fill: "#8dd1e1" },
  { name: "35-39", uv: 8.22, pv: 9800, fill: "#82ca9d" },
  { name: "40-49", uv: -8.63, pv: 3908, fill: "#a4de6c" },
  { name: "50+", uv: -2.63, pv: 4800, fill: "#d0ed57" },
  { name: "unknow", uv: 6.67, pv: 4800, fill: "#ffc658" },
];

// Scatter chart data
const scdata01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
const scdata02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

// Treemap data
const treemapData = [
  {
    "name": "axis",
    "children": [
      { "name": "Axis", "size": 24593 },
      { "name": "Axes", "size": 1302 },
      { "name": "AxisGridLine", "size": 652 },
      { "name": "AxisLabel", "size": 636 },
      { "name": "CartesianAxes", "size": 6703 }
    ]
  },
  {
    "name": "controls",
    "children": [
      { "name": "TooltipControl", "size": 8435 },
      { "name": "SelectionControl", "size": 7862 },
      { "name": "PanZoomControl", "size": 5222 },
      { "name": "HoverControl", "size": 4896 },
      { "name": "ControlList", "size": 4665 },
      { "name": "ClickControl", "size": 3824 },
      { "name": "ExpandControl", "size": 2832 },
      { "name": "DragControl", "size": 2649 },
      { "name": "AnchorControl", "size": 2138 },
      { "name": "Control", "size": 1353 },
      { "name": "IControl", "size": 763 }
    ]
  },
  {
    "name": "data",
    "children": [
      { "name": "Data", "size": 20544 },
      { "name": "NodeSprite", "size": 19382 },
      { "name": "DataList", "size": 19788 },
      { "name": "DataSprite", "size": 10349 },
      { "name": "EdgeSprite", "size": 3301 },
      {
        "name": "render",
        "children": [
          { "name": "EdgeRenderer", "size": 5569 },
          { "name": "ShapeRenderer", "size": 2247 },
          { "name": "ArrowType", "size": 698 },
          { "name": "IRenderer", "size": 353 }
        ]
      },
      { "name": "ScaleBinding", "size": 11275 },
      { "name": "TreeBuilder", "size": 9930 },
      { "name": "Tree", "size": 7147 }
    ]
  },
  {
    "name": "events",
    "children": [
      { "name": "DataEvent", "size": 7313 },
      { "name": "SelectionEvent", "size": 6880 },
      { "name": "TooltipEvent", "size": 3701 },
      { "name": "VisualizationEvent", "size": 2117 }
    ]
  },
  {
    "name": "legend",
    "children": [
      { "name": "Legend", "size": 20859 },
      { "name": "LegendRange", "size": 10530 },
      { "name": "LegendItem", "size": 4614 }
    ]
  },
  {
    "name": "operator",
    "children": [
      {
        "name": "distortion",
        "children": [
          { "name": "Distortion", "size": 6314 },
          { "name": "BifocalDistortion", "size": 4461 },
          { "name": "FisheyeDistortion", "size": 3444 }
        ]
      },
      {
        "name": "encoder",
        "children": [
          { "name": "PropertyEncoder", "size": 4138 },
          { "name": "Encoder", "size": 4060 },
          { "name": "ColorEncoder", "size": 3179 },
          { "name": "SizeEncoder", "size": 1830 },
          { "name": "ShapeEncoder", "size": 1690 }
        ]
      },
      {
        "name": "filter",
        "children": [
          { "name": "FisheyeTreeFilter", "size": 5219 },
          { "name": "VisibilityFilter", "size": 3509 },
          { "name": "GraphDistanceFilter", "size": 3165 }
        ]
      },
      { "name": "IOperator", "size": 1286 },
      {
        "name": "label",
        "children": [
          { "name": "Labeler", "size": 9956 },
          { "name": "RadialLabeler", "size": 3899 },
          { "name": "StackedAreaLabeler", "size": 3202 }
        ]
      },
      {
        "name": "layout",
        "children": [
          { "name": "RadialTreeLayout", "size": 12348 },
          { "name": "NodeLinkTreeLayout", "size": 12870 },
          { "name": "CirclePackingLayout", "size": 12003 },
          { "name": "CircleLayout", "size": 9317 },
          { "name": "TreeMapLayout", "size": 9191 },
          { "name": "StackedAreaLayout", "size": 9121 },
          { "name": "Layout", "size": 7881 },
          { "name": "AxisLayout", "size": 6725 },
          { "name": "IcicleTreeLayout", "size": 4864 },
          { "name": "DendrogramLayout", "size": 4853 },
          { "name": "ForceDirectedLayout", "size": 8411 },
          { "name": "BundledEdgeRouter", "size": 3727 },
          { "name": "IndentedTreeLayout", "size": 3174 },
          { "name": "PieLayout", "size": 2728 },
          { "name": "RandomLayout", "size": 870 }
        ]
      },
      { "name": "OperatorList", "size": 5248 },
      { "name": "OperatorSequence", "size": 4190 },
      { "name": "OperatorSwitch", "size": 2581 },
      { "name": "Operator", "size": 2490 },
      { "name": "SortOperator", "size": 2023 }
    ]
  }
];
const sankeyData = [
  { name: "Visit → Direct-Favourite", value: 3728.3 },
  { name: "Visit → Page-Click", value: 354170 },
  { name: "Page-Click → Detail-Favourite", value: 62429 },
  { name: "Page-Click → Lost", value: 291741 },
];



const cardStyle = {
  background: "#fff",
  borderRadius: 8,
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  padding: 24,
  width: "100%",
  maxWidth: 800,
};

function SampleCard() {
  return (
    <div>
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>SampleCard</h2>
      <div style={cardStyle}>
        Hello World
      </div>
    </div>
  );
}


export function MyAreaChart({ data }) {
  return (
    <div>
      {/* Area Chart */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>Area Chart Example</h2>
      <div style={cardStyle}>

        <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}

export function MyAreaChart1({ data }) {
  return (
    <div>

      {/* Temperature Range Area Chart */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>
        Temperature Range Area Chart
      </h2>
      <div style={cardStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="tempHigh"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="tempLow"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}


export function MyBarChart({ data }) {
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

export function MyBarChart1({ data }) {
  return (
    <div>

      {/* Bar Chart for Temperature Range */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>
        Temperature Range Bar Chart
      </h2>
      <div style={cardStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tempLow" stackId="a" fill="#82ca9d" />
            <Bar dataKey="tempRange" stackId="a" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export function MyLineChart({ data }) {
  return (
    <div>

      {/* Line Chart */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>Line Chart Example</h2>
      <div style={cardStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export function MyComposedChart({ data }) {
  return (
    <div>

      {/* Composed Chart */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>Composed Chart Example</h2>
      <div style={cardStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}


export function MyNestedPieChart({ data }) {
  return (
    <div>


      {/* Nested Pie Chart (Donut Chart) */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>Nested Pie Chart</h2>
      <div style={cardStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export function MyRadarChart({ data }) {
  return (
    <div>

      {/* Radar Chart */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>Radar Chart Example</h2>
      <div style={cardStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart outerRadius={90} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Lily"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export function MyScatterChart({ data }) {
  return (
    <div>

     {/* Scatter Chart */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>Scatter Chart Example</h2>
      <div style={cardStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 10,
              left: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              type="number"
              name="X Value"
              unit="unit"
            />
            <YAxis
              dataKey="y"
              type="number"
              name="Y Value"
              unit="unit"
            />
            <ZAxis
              dataKey="z"
              type="number"
              range={[64, 144]}
              name="Size"
              unit="unit"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter
              name="Dataset A"
              data={scdata01}
              fill="#8884d8"
            />
            <Scatter
              name="Dataset B"
              data={scdata02}
              fill="#82ca9d"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export function MyRadialBarChart({ data }) {
  return (
    <div>

      {/* Radial Bar Chart */}
      <h2 style={{ marginBottom: 24, color: "#3730a3" }}>Radial Bar Chart Example</h2>
      <div style={cardStyle}>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart
            innerRadius="10%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: "#666", position: "insideStart" }}
              background
              clockWise={true}
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}



export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "2rem",
        padding: 32,
      }}
    >
      <SampleCard />
      <MyAreaChart data={mainData} />
      <MyAreaChart1 data={rangeData} />

      <MyBarChart data={mainData} />
      <MyBarChart1 data={rangeData} />

      <MyLineChart data={mainData} />
      <MyComposedChart data={mainData} />

      <MyNestedPieChart data={mainData} />
      <MyRadarChart data={radarData} />

      <MyScatterChart data={mainData} />
      <MyRadialBarChart data={radialData} />
    </div>
  );
}
