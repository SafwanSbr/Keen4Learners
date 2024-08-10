export type getVideos = {
    noq:number;
    title:string;
    youtubeID:string;
}

export type OptionDTO = {
    checked: boolean;
    text: string;
};
  
export  type QuestionDTO = {
    title: string;
    options: OptionDTO[];
};