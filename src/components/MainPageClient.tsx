import { AnimatePresence, motion } from 'framer-motion';
import { MailIcon } from 'lucide-react';
import { RESUME_DATA } from '@/data/resume-data';
import { socialMedia } from '@/data/social-media';
import { useTextChangeRandom } from '@/hooks/use-text-change-random';
import { useTypewriter } from '@/hooks/use-typewritter';

const variants = {
  container: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

export default function MainPageClient() {
  const displayedText = useTypewriter('Rafa Al Razzak', 300);
  const greeting = useTextChangeRandom(
    ['Hello', 'Halo', 'Hola', 'Sampurasun', 'Bonjour', 'Ciao', 'こんにちは', '안녕하세요'],
    500
  );

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants.container}
      className="flex w-full flex-col gap-8 p-4 sm:p-8"
    >
      <motion.div variants={variants.item} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.span
              key={greeting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-xl italic text-primary"
            >
              {greeting}
            </motion.span>
          </AnimatePresence>
          <h1 className="flex items-center">
            <span className="mr-2">I&apos;m</span>
            <span>{displayedText}</span>
            <div className="ml-1 h-6 w-2 animate-blink bg-primary" />
          </h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground">{RESUME_DATA.about}</p>

        <div className="flex gap-3">
          {RESUME_DATA.contact.email && (
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="p-1 transition-colors hover:text-primary"
            >
              <MailIcon className="size-4 text-muted-foreground" />
            </a>
          )}
          {socialMedia.map((social) => (
            <a
              key={social.url}
              href={social.url}
              className="p-1 transition-colors hover:text-primary"
            >
              <social.icon className="size-4 fill-current text-muted-foreground" />
            </a>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col gap-3">
        {RESUME_DATA.work.map((work) => (
          <a
            key={work.company}
            href={work.link}
            className="flex flex-col gap-1 transition-opacity hover:opacity-80"
          >
            <div className="flex items-center gap-2">
              <img src={work.logo} alt={work.company} width={24} height={24} className="rounded-md" />
              <p className="text-primary">{work.company}</p>
              <p className="text-muted-foreground">{work.title}</p>
            </div>
            <p className="text-sm text-muted-foreground">{work.description}</p>
          </a>
        ))}
      </div>

      <motion.section variants={variants.item} className="space-y-3">
        <h2 className="text-xl font-semibold">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.languages.map((lang) => (
            <span key={lang} className="rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground">
              {lang}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section variants={variants.item} className="space-y-3">
        <h2 className="text-xl font-semibold">Tools</h2>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.tools.map((tool) => (
            <span key={tool} className="rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground">
              {tool}
            </span>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
