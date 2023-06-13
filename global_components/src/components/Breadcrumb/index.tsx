import { cloneElement, HTMLAttributes, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import * as S from './styles';
import { getValidChildren } from '../../utils/react';

type BreadcrumbProps = {
  children: ReactNode;
  separator?: ReactNode;
  spacing?: string;
};

type BreadcrumbItemProps = HTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
  isCurrentPage?: boolean;
  separator?: string;
  isLastChild?: boolean;
  spacing?: string;
};

type BreadcrumbLinkProps = LinkProps & {
  children: ReactNode;
  isCurrentPage?: boolean;
  href: string;
};

type BreadcrumbSeparatorProps = {
  children: ReactNode;
  spacing?: string;
};

export function BreadcrumbSeparator({
  children,
  spacing,
}: BreadcrumbSeparatorProps) {
  return (
    <S.Separator spacing={spacing} role="presentation">
      {children}
    </S.Separator>
  );
}

export function BreadcrumbLink({
  children,
  isCurrentPage,
  href,
  ...rest
}: BreadcrumbLinkProps) {
  if (isCurrentPage) {
    return <S.Span aria-current="page">{children}</S.Span>;
  }

  return (
    <Link href={href} passHref {...rest}>
      {children}
    </Link>
  );
}

export function BreadcrumbItem({
  children,
  separator,
  isLastChild,
  spacing,
  isCurrentPage,
  ...rest
}: BreadcrumbItemProps) {
  const validChildren = getValidChildren(children);

  const clones = validChildren.map((child) => {
    if (child.type === BreadcrumbLink) {
      return cloneElement(child, {
        isCurrentPage,
      });
    }

    if (child.type === BreadcrumbSeparator) {
      return cloneElement(child, {
        spacing,
        children: child.props.children || separator,
      });
    }

    return child;
  });

  return (
    <S.Li {...rest}>
      {clones}
      {!isLastChild && (
        <BreadcrumbSeparator spacing={spacing}>{separator}</BreadcrumbSeparator>
      )}
    </S.Li>
  );
}

export function Breadcrumb({
  children,
  separator = '/',
  spacing = '0.5rem',
}: BreadcrumbProps) {
  const validChildren = getValidChildren(children);
  const count = validChildren.length;

  const clones = validChildren.map((child, index) =>
    cloneElement(child, {
      separator,
      spacing,
      isLastChild: count === index + 1,
    })
  );
  return (
    <S.Nav aria-label="breadcrumb">
      <ol>{clones}</ol>
    </S.Nav>
  );
}
