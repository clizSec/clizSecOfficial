import NextLink from 'next/link';
import { LinkedinIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Cookies Policy', href: '/cookies-policy' },
    ],
  },
  {
    title: 'Product',
    items: [
      { title: 'Features', href: '/features' },
      { title: 'Something', href: '/something' },
      { title: 'Something else', href: '/something-else' },
      { title: 'And something else', href: '/and-something-else' },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Help Center', href: '/help-center' },
    ],
  },
  {
    title: 'Something',
    items: [
      { title: 'Features2', href: '/features2' },
      { title: 'Something2', href: '/something2' },
      { title: 'Something else2', href: '/something-else2' },
      { title: 'And something else2', href: '/and-something-else2' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.linkedin.com/in/clizsec" passHref>
              <a>
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink>
            <NextLink href="https://hackerone.com/clizsec" passHref>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" fill="#000000" fillRule="evenodd"> <circle cx="32" cy="32" r="31" fill="#000000"></circle> <g transform="matrix(0.45 0 0 0.45 18 18)"  > <path d="M22.347.793C21.466.264 20.496 0 19.262 0c-1.322 0-2.38.264-3.174.793s-1.234 1.234-1.234 2.116v58.094c0 .705.44 1.4 1.234 2.028a5.14 5.14 0 0 0 3.085.97 5.34 5.34 0 0 0 3.085-.97c.88-.617 1.322-1.322 1.322-2.028V2.9c.088-.882-.353-1.587-1.234-2.116m7.318 30.5c-.53.53-.793 1.234-.617 2.292.088 1.058.53 2.028 1.4 2.9.793.882 1.763 1.5 2.82 1.763s1.85.088 2.38-.353l4.672-2.9v26.006c0 .705.44 1.4 1.234 2.028s1.85.97 3.085.97 2.292-.353 3.174-.97 1.322-1.322 1.322-2.028V25.917c0-.882-.44-1.5-1.322-2.028s-1.94-.793-3.262-.793-2.292.264-3.085.793l-11.813 7.405" fill="white"/> </g></svg>
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2022 Mark Liapustin (clizSec)</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
