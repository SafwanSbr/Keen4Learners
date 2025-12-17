export type getVideos = {
  noq: number;
  title: string;
  youtubeID: string;
};

export type OptionDTO = {
  checked: boolean;
  title: string;
};

export type QuestionDTO = {
  title: string;
  options: OptionDTO[];
};

export type QuizAnsDTO = {
  title: string;
  options: { correct?: boolean; title: string }[];
};
