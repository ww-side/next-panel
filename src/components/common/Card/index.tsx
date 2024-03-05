import { type FC, useRef } from "react";
import { XYCoord } from "dnd-core";
import { useDrag, useDrop } from "react-dnd";
import { FunnelChart, LineChart, PieChart } from "@/components/common/Charts";
import CardLayout from "@/components/layouts/CardLayout";
import { cardsStore } from "@/store/cards";
import { Widgets, type WidgetType } from "@/types/widgets";

const Card: FC<{ card: WidgetType; index: number }> = ({ card, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect: (monitor) => ({ handlerId: monitor.getHandlerId() }),
    hover(item: any, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      cardsStore.moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      const { id } = card;

      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <>
      {card.widget_type === Widgets.PIE_CHART && (
        <CardLayout
          card={card}
          cardRef={ref}
          isDragging={isDragging}
          handlerId={handlerId}
        >
          <PieChart data01={card.data01} data02={card.data02} />
        </CardLayout>
      )}
      {card.widget_type === Widgets.FUNNEL_CHART && (
        <CardLayout
          card={card}
          cardRef={ref}
          isDragging={isDragging}
          handlerId={handlerId}
        >
          <FunnelChart data={card.data01} />
        </CardLayout>
      )}
      {card.widget_type === Widgets.LINE_CHART && (
        <CardLayout
          card={card}
          cardRef={ref}
          isDragging={isDragging}
          handlerId={handlerId}
        >
          <LineChart data={card.data01} />
        </CardLayout>
      )}
      {(!card.widget_type ||
        !Object.values(Widgets).includes(card.widget_type)) &&
        null}
    </>
  );
};

export default Card;
