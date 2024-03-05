import { makeAutoObservable } from "mobx";
import type { WidgetType } from "@/types/widgets";
import { widgets } from "@/data/mockData";

interface CardsStoreModel {
  cards: WidgetType[];
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  setCards: (newCards: WidgetType[]) => void;
  addCard: (newCard: WidgetType) => void;
  deleteCard: (cardId: string | number) => void;
}

class CardsStore implements CardsStoreModel {
  cards: WidgetType[] = [];

  constructor(cards: WidgetType[]) {
    makeAutoObservable(this);

    this.cards = cards;
    this.moveCard = this.moveCard.bind(this);
    // this.addCard = this.addCard.bind(this);
  }

  addCard(newCard: WidgetType): void {
    this.cards = [...this.cards, newCard];
  }

  deleteCard(cardId: string | number): void {
    this.cards = this.cards.filter((card) => card.id !== cardId);
  }

  setCards(newCards: WidgetType[]): void {
    this.cards = newCards;
  }

  moveCard(dragIndex: number, hoverIndex: number): void {
    const draggedCard = this.cards[dragIndex];
    const updatedCards = [...this.cards];

    updatedCards.splice(dragIndex, 1);
    updatedCards.splice(hoverIndex, 0, draggedCard);

    this.cards = updatedCards;
  }
}

export const cardsStore = new CardsStore(widgets);
