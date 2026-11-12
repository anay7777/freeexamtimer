import { languages, ui, type Lang } from '../i18n/ui';
import { useTranslatedPath } from '../i18n/utils';
import { extraTimeRows } from './extra-time';

const SITE = 'https://freeexamtimer.com';
const en = ui.en;

/** Converts the dictionary's inline HTML (<strong>, <em>, <kbd>, entities) to Markdown. */
function md(html: string): string {
  return html
    .replace(/<\/?strong>/g, '**')
    .replace(/<\/?em>/g, '_')
    .replace(/<\/?kbd>/g, '`')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ');
}

const url = (path: string, lang: Lang = 'en') => SITE + useTranslatedPath(lang)(path);

function header(): string[] {
  const geo = en.app.geo;
  return [
    '# FreeExamTimer',
    '',
    `> ${md(geo.summary)}`,
    '',
    `Keywords: ${en.meta.keywords}`,
    '',
    `## ${geo.factsTitle}`,
    '',
    ...geo.facts.map((f) => `- **${f.label}:** ${f.value}`),
    '',
  ];
}

function pages(): string[] {
  const langLines = (Object.keys(languages) as Lang[])
    .filter((l) => l !== 'en')
    .map((l) => `- [${languages[l]} — ${ui[l].meta.home.title}](${url('/', l)}): ${ui[l].meta.home.description}`);

  return [
    '## Pages',
    '',
    `- [Free exam timer](${url('/')}): ${en.meta.home.description}`,
    `- [How to use the exam timer](${url('/how-to/')}): ${en.meta.howTo.description}`,
    `- [Exam timer FAQ](${url('/faq/')}): ${en.meta.faq.description}`,
    `- [About FreeExamTimer](${SITE}/about): Who builds FreeExamTimer and why it is free, ad-free and hall-ready.`,
    '',
    '## Other languages',
    '',
    ...langLines,
    '',
    '## Optional',
    '',
    `- [Full content for LLMs](${SITE}/llms-full.txt): Complete guide, extra time table and FAQ in one Markdown file.`,
    `- [Privacy policy](${SITE}/privacy)`,
    `- [Terms and conditions](${SITE}/terms)`,
    `- [Contact](${SITE}/contact)`,
    '',
  ];
}

export function llmsTxt(): string {
  return [...header(), ...pages()].join('\n');
}

export function llmsFullTxt(): string {
  const { seo, geo } = en.app;
  const rows = extraTimeRows(geo.units);

  return [
    ...header(),
    `## ${seo.what.title}`,
    '',
    ...seo.what.paragraphs.flatMap((p) => [md(p), '']),
    `## ${seo.core.title}`,
    '',
    ...seo.core.items.map((i) => `- ${md(i)}`),
    '',
    `## ${geo.extraTitle}`,
    '',
    geo.extraIntro,
    '',
    `| ${geo.colStandard} | ${geo.colExtra} | ${geo.colTotal} |`,
    '| --- | --- | --- |',
    ...rows.map((r) => `| ${r.standard} | ${r.extra} | ${r.total} |`),
    '',
    `## ${seo.competitive.title}`,
    '',
    md(seo.competitive.intro),
    '',
    ...seo.competitive.items.map((i) => `- ${md(i)}`),
    '',
    `## ${seo.why.title}`,
    '',
    md(seo.why.intro),
    '',
    ...seo.why.items.map((i) => `- ${md(i)}`),
    '',
    `## ${seo.howTo.title}`,
    '',
    ...seo.howTo.steps.map((s, i) => `${i + 1}. ${md(s)}`),
    '',
    `## ${en.faq.title}`,
    '',
    ...en.faq.items.flatMap((item) => [`### ${item.question}`, '', item.answer, '']),
    ...pages(),
  ].join('\n');
}
