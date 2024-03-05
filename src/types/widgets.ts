export enum Widgets {
  PIE_CHART = "PieChart",
  FUNNEL_CHART = "FunnelChart",
  LINE_CHART = "LineChart",
}

export type WidgetType = {
  id: string | number;
  widget_type: Widgets;
  data01: any[];
  data02?: any[];
};
//
// export type PieChartType = {
//   id: string | number;
//   widget_type: keyof Widgets;
//   data01: { name: string; value: number }[];
//   data02: { name: string; value: number }[];
// };
//
// export type FunnelChartType = {
//   id: string | number;
//   widget_type: keyof Widgets;
//   data: { value: number; name: string; fill: string }[];
// };
//
// export type LineChartType = {
//   id: string | number;
//   widget_type: keyof Widgets;
//   data: { name: string; value1: number; value2: number }[];
// };
