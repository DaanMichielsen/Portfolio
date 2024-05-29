import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import TechLink from './TechLink';
import Image, { StaticImageData } from 'next/image';

export interface AccordionTechnology {
  name: string;
  url: string;
  description: React.ReactNode;
  image: StaticImageData;
}

interface TechnologyAccordionProps {
  technologies: AccordionTechnology[];
}

const TechnologyAccordion: React.FC<TechnologyAccordionProps> = ({
  technologies,
}) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
      defaultValue='item-0'
    >
      {technologies.map((tech, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <div className='flex gap-2'>
              <Image
                src={tech.image}
                height={30}
                width={30}
                alt={tech.name}
              ></Image>
              <TechLink techUrl={tech.url} name={tech.name} />
            </div>
          </AccordionTrigger>
          <AccordionContent>{tech.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TechnologyAccordion;
