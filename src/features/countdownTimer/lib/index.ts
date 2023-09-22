
export const formatNumberWithLeadingZero = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };


export const calculateTimeRemaining = (targetDate: Date): string => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${formatNumberWithLeadingZero(days)} ${formatNumberWithLeadingZero(
      hours
    )} ${formatNumberWithLeadingZero(minutes)} ${formatNumberWithLeadingZero(
      seconds
    )}`;
  };
  

  