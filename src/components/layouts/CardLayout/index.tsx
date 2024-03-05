import { type FC, type LegacyRef, type ReactNode } from "react";
import { type Identifier } from "dnd-core";
import cx from "classnames";
import { cardsStore } from "@/store/cards";
import type { WidgetType } from "@/types/widgets";
import st from "./styles.module.scss";

const CardLayout: FC<{
  card: WidgetType;
  children: ReactNode;
  cardRef: LegacyRef<HTMLDivElement> | undefined;
  isDragging: boolean;
  handlerId: Identifier | null;
}> = ({ card, children, cardRef, isDragging, handlerId }) => {
  const handleDeleteCard = (id: number | string) => () => {
    cardsStore.deleteCard(id);
  };

  const cardStyles = cx(st.card, {
    [st.dragging]: isDragging,
  });

  return (
    <div ref={cardRef} className={cardStyles} data-handler-id={handlerId}>
      <span onClick={handleDeleteCard(card.id)}>x</span>
      {children}
    </div>
  );
};

export default CardLayout;
