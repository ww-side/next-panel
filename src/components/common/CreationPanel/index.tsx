"use client";
import { Button, Typography } from "antd";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { cardsStore } from "@/store/cards";
import {
  generateRandomDataForFunnelWidget,
  generateRandomDataForLineWidget,
  generateRandomDataForPieWidget,
} from "@/helpers/widgets";
import { Widgets } from "@/types/widgets";
import st from "./styles.module.scss";

const CreationPanel = () => {
  const handleCreatePieWidget = () => {
    const { pieData01, pieData02 } = generateRandomDataForPieWidget();

    cardsStore.addCard({
      id: uuid(),
      widget_type: Widgets.PIE_CHART,
      data01: pieData01,
      data02: pieData02,
    });

    toast.success("Pie widget was successfully created!");
  };

  const handleCreateLineWidget = () => {
    cardsStore.addCard({
      id: uuid(),
      widget_type: Widgets.LINE_CHART,
      data01: generateRandomDataForLineWidget(),
    });

    toast.success("Line widget was successfully created!");
  };

  const handleCreateFunnelWidget = () => {
    cardsStore.addCard({
      id: uuid(),
      widget_type: Widgets.FUNNEL_CHART,
      data01: generateRandomDataForFunnelWidget(),
    });

    toast.success("Funnel widget was successfully created!");
  };

  return (
    <>
      <Typography.Title level={3}>
        Create widget with random data
      </Typography.Title>
      <section className={st.creationPanel}>
        <Button type="default" size="large" onClick={handleCreatePieWidget}>
          Create Pie Widget
        </Button>
        <Button type="default" size="large" onClick={handleCreateLineWidget}>
          Create Line Widget
        </Button>
        <Button type="default" size="large" onClick={handleCreateFunnelWidget}>
          Create Funnel Widget
        </Button>
      </section>
    </>
  );
};

export default CreationPanel;
