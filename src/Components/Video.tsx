type Props = {
  title:string;
  id:string;
  noOfQuestions:number;
}

const Video = ({title, id, noOfQuestions}:Props) => {
  return (
    <div className="bg-background-surface rounded-lg border border-border shadow-soft hover:shadow-medium transition-all duration-200 cursor-pointer overflow-hidden group max-w-full">
      <div className="relative overflow-hidden">
        <img 
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} 
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-base sm:text-lg font-semibold text-text-primary mb-3 sm:mb-4 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-sm text-secondary">quiz</span>
            <p className="text-sm sm:text-base text-text-secondary font-medium">
              {noOfQuestions} {noOfQuestions === 1 ? 'Question' : 'Questions'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-sm text-accent">stars</span>
            <p className="text-sm sm:text-base text-text-secondary font-medium">
              {noOfQuestions * 5} Points
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
