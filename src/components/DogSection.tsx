import { Link } from "react-router-dom";

interface DogSectionProps {
  id?: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel?: string;
  reversed?: boolean;
}

const DogSection = ({
  id,
  title,
  titleHighlight,
  description,
  buttonText,
  buttonHref = "#kontakt",
  imageSrc,
  imageAlt,
  imageLabel,
  reversed = false
}: DogSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-20 bg-primary-foreground">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`
          }>

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[400px] md:h-[650px] object-cover rounded-[10px]"
              loading="lazy" />

            {imageLabel &&
            <span className="absolute bottom-3 left-3 bg-accent/80 text-accent-foreground px-3 py-1 rounded-full text-sm font-heading">
                {imageLabel}
              </span>
            }
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground">
              {title}{" "}
              <span className="text-accent">{titleHighlight}</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              {description}
            </p>
            <Link
              to={buttonHref}
              className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-body border border-primary hover:opacity-90 transition-opacity">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>);

};

export default DogSection;