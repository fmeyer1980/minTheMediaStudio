import S from '@sanity/desk-tool/structure-builder'

import {
  GrDocumentText as FieldIcon,
  GrMultiple as DocumentIcon,
  GrTextAlignLeft as PostIcon,
  GrDocumentUser as AuthorIcon,
  GrUserSettings as MemberIcon,
  GrArticle as ArticleIcon
} from 'react-icons/gr'

import { GoSettings, GoHome, GoScreenFull, GoBriefcase, GoGlobe } from "react-icons/go"

const hiddenDocTypes = listItem =>
  !['siteSettings','home','pages','cases','posts','categories','employees'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(GoSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Home')
        .icon(GoHome)
        .child(
          S.editor()
            .id('home')
            .schemaType('home')
            .documentId('home')
        ),
      S.divider(),
      S.documentTypeListItem('pages')
        .icon(GoScreenFull),
      S.documentTypeListItem('cases')
        .icon(GoBriefcase),
      S.documentTypeListItem('posts')
        .icon(ArticleIcon),
      S.documentTypeListItem('categories')
        .icon(DocumentIcon),
      S.documentTypeListItem('employees')
        .icon(AuthorIcon),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
