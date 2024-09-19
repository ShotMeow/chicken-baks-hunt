import type { ChickenType } from "@/entities/chicken";
import { type Dispatch, type SetStateAction, createContext } from "react";

export interface GameContextType {
	score: number;
	setScore: Dispatch<SetStateAction<number>>;
	hitRate: number;
	setHitRate: Dispatch<SetStateAction<number>>;
	limit: number;
	setLimit: Dispatch<SetStateAction<number>>;
	isPaused: boolean;
	setIsPaused: Dispatch<SetStateAction<boolean>>;
	chickens: ChickenType[];
	setChickens: Dispatch<SetStateAction<ChickenType[]>>;
	shots: number;
	setShots: Dispatch<SetStateAction<number>>;
	hits: number;
	setHits: Dispatch<SetStateAction<number>>;
	spawnInterval: number;
	setSpawnInterval: Dispatch<SetStateAction<number>>;
	activeModal: "end" | "pause" | "restart" | null;
	setActiveModal: Dispatch<SetStateAction<"end" | "pause" | "restart" | null>>;
}

export const GameContext = createContext<GameContextType>({
	score: 0,
	setScore: () => {},
	hitRate: 0,
	setHitRate: () => {},
	limit: 0,
	setLimit: () => {},
	isPaused: false,
	setIsPaused: () => {},
	chickens: [],
	setChickens: () => {},
	shots: 0,
	setShots: () => {},
	hits: 0,
	setHits: () => {},
	spawnInterval: 1500,
	setSpawnInterval: () => {},
	activeModal: null,
	setActiveModal: () => {},
});
