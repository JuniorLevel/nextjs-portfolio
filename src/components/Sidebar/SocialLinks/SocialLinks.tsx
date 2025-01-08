import { ISocialLinksItem } from './social.links';
import styles from './social.links.module.scss';
import SocialLinksItem from './SocialLinksItem/SocialLinksItem';

type Props = {
  socialLinks: ISocialLinksItem[];
};

function SocialLinks({ socialLinks }: Readonly<Props>) {
  return (
    <ul className={styles.social}>
      {socialLinks.map((link) => (
        <SocialLinksItem
          key={link.id}
          title={link.title}
          href={link.href}
          icon={link.icon}
        />
      ))}
    </ul>
  );
}

export default SocialLinks;
