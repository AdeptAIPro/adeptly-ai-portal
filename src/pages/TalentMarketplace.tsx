
import ResumeUploadSelector from "@/components/home/resumeUpload/ResumeUploadSelector";

const TalentMarketplace = () => {
  return (
    <div className="container mx-auto py-12 px-3 sm:px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">Resume Upload Designs</h1>
        <p className="text-lg text-muted-foreground">
          Explore 20 unique designs for resume submission
        </p>
      </div>

      <ResumeUploadSelector />
    </div>
  );
};

export default TalentMarketplace;
