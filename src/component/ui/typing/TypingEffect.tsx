import React, { useState, useEffect, useRef, useCallback } from 'react';
import './TypingEffect.css';
import { TypingEffectProps, TypingState } from '@src/types/Typing';

export const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 50,
  pauseBetweenTexts = 300,
  className = '',
  onComplete
}) => {
  const [state, setState] = useState<TypingState>({
    currentTextIndex: 0,
    currentCharIndex: 0,
    isTyping: true,
    completedTexts: ['# 서세원 / Front End Engineer'],
    displayText: ''
  });

  const [showCursor, setShowCursor] = useState(true);
  const [speed] = useState(typingSpeed);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 커서 깜빡임 효과
  useEffect(() => {
    if (state.isTyping || state.currentTextIndex < texts.length) {
      cursorIntervalRef.current = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
    } else {
      setShowCursor(false);
    }

    return () => {
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, [state.isTyping, state.currentTextIndex, texts.length]);

  const typeCharacter = useCallback(() => {
    setState(prevState => {
      const { currentTextIndex, currentCharIndex } = prevState;
      
      if (currentTextIndex >= texts.length) {
        return prevState;
      }

      const currentText = texts[currentTextIndex];
      
      if (currentCharIndex < currentText.length) {
        return {
          ...prevState,
          currentCharIndex: currentCharIndex + 1,
          displayText: currentText.slice(0, currentCharIndex + 1)
        };
      }

      return prevState;
    });
  }, [texts]);

  const startNextText = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      completedTexts: [...prevState.completedTexts, prevState.displayText],
      currentTextIndex: prevState.currentTextIndex + 1,
      currentCharIndex: 0,
      displayText: '',
      isTyping: true
    }));
  }, []);

  const completeTyping = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isTyping: false
    }));
    
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    if (state.currentTextIndex >= texts.length) {
      completeTyping();
      return;
    }

    const currentText = texts[state.currentTextIndex];

    if (state.isTyping && state.currentCharIndex < currentText.length) {
      timeoutRef.current = setTimeout(typeCharacter, speed);
    } else if (state.isTyping && state.currentCharIndex >= currentText.length) {
      timeoutRef.current = setTimeout(startNextText, pauseBetweenTexts);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    state.currentTextIndex,
    state.currentCharIndex,
    state.isTyping,
    texts,
    speed,
    pauseBetweenTexts,
    typeCharacter,
    startNextText,
    completeTyping
  ]);

  return (
    <div className={`typing-effect-container ${className}`}>
      <div className="typing-effect-wrapper">
        <div className="typing-effect-card">
          <div className="typing-effect-content">
            <div className="typing-effect-text-container">
              {state.completedTexts.map((text, index) => (
                <p key={index} className="typing-effect-completed-text">
                  {text}
                </p>
              ))}
              
              {state.currentTextIndex < texts.length && (
                <p className="typing-effect-current-text">
                  {state.displayText}
                  <span 
                    className={`typing-effect-cursor ${
                      showCursor ? 'visible' : 'hidden'
                    }`}
                  />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};