import { type FC } from "react";
import { Funnel, FunnelChart, LabelList } from "recharts";

const FunnelGraph: FC<{ data: any[] }> = ({ data }) => {
  return (
    <FunnelChart width={730} height={250}>
      <Funnel dataKey="value" data={data} isAnimationActive>
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
  );
};

export default FunnelGraph;
