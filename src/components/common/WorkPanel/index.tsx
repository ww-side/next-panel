"use client";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { observer } from "mobx-react-lite";
import Card from "@/components/common/Card/";
import st from "./styles.module.scss";
import { cardsStore } from "@/store/cards";
import { Typography } from "antd";

const WorkPanel = observer(() => {
  const { cards } = cardsStore;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={st.panel}>
        {cards.length === 0 ? (
          <Typography.Text strong>This panel is empty</Typography.Text>
        ) : (
          cards.map((card, i) => <Card key={card.id} card={card} index={i} />)
        )}
      </div>
    </DndProvider>
  );
});

export default WorkPanel;
