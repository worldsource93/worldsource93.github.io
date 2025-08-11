export interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  pauseBetweenTexts?: number;
  className?: string;
  onComplete?: () => void;
}

export interface TypingState {
  currentTextIndex: number;
  currentCharIndex: number;
  isTyping: boolean;
  completedTexts: string[];
  displayText: string;
}