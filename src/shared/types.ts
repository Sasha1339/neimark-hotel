export type HeaderAction = 'hidden' | 'home' | 'room' | 'search';

export type NavigationTab = 'home' | 'about' | 'price' | 'acco' | 'news' | 'excursion' | string;

export interface Filter {
  dateStart: string | null;
  dateEnd: string | null;
}