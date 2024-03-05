import dynamic from "next/dynamic";

export const PieChart = dynamic(
  () => import("@/components/common/Charts/PieGraph/"),
  {
    ssr: false,
  }
);

export const FunnelChart = dynamic(
  () => import("@/components/common/Charts/FunnelGraph/"),
  {
    ssr: false,
  }
);

export const LineChart = dynamic(
  () => import("@/components/common/Charts/LineGraph/"),
  {
    ssr: false,
  }
);
