import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 6, title: 'period 6: 1865–1898' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the robber barons — captains of industry or criminals?' },
  { type: 'body', content: 'Historians debate whether Gilded Age industrialists were "robber barons" (exploited workers and bribed politicians) or "captains of industry" (created jobs, lowered prices, built modern America). The truth is both. Carnegie and Rockefeller created enormous value AND used ruthless tactics: Standard Oil\'s railroad rebates were secret discounts that destroyed competitors; Carnegie\'s Homestead Strike (1892) used armed Pinkerton agents against locked-out workers.' },
  { type: 'table', content: '', tableHeaders: ['industrialist', 'industry', 'method', 'legacy'],
    tableRows: [
      ['Andrew Carnegie', 'Steel', 'Vertical integration; Bessemer process; cut wages ruthlessly', 'Donated $350M to libraries, universities, Carnegie Hall'],
      ['John D. Rockefeller', 'Oil', 'Horizontal integration; secret railroad rebates; Standard Oil Trust (1882)', 'Trust broken up by Supreme Court (1911); richest American in history'],
      ['J.P. Morgan', 'Finance/Banking', 'Consolidated industries; rescued U.S. Treasury twice (1895, 1907)', 'US Steel; Morgan Chase bank; investigated by "Money Trust" committee'],
      ['Cornelius Vanderbilt', 'Railroads', 'Consolidated NY railroads; bribed state legislatures; "the public be damned"', 'New York Central; Grand Central Terminal'],
    ]
  },
  { type: 'heading', content: 'trusts & holding companies' },
  { type: 'body', content: 'A trust was a legal device where stockholders from competing companies transferred their shares to a central board of trustees, effectively merging control while avoiding antitrust laws. Rockefeller invented the Standard Oil Trust (1882). When courts struck down trusts, corporations reorganized as holding companies (a parent company owning controlling shares of multiple competitors). Both achieved the same goal: monopoly control.' },
  { type: 'examtip', content: 'Know: trusts are attacked by the Sherman Antitrust Act (1890) and enforced by TR\'s Northern Securities case (1904). The purpose of both trusts and holding companies is the same: eliminate competition and control prices. This is the economic context for Progressive Era reform.' },
  { type: 'frqtip', content: 'For any LEQ on the Gilded Age, don\'t just list names and dates. Analyze: how did laissez-faire ideology prevent government regulation? How did Social Darwinism justify inequality? How did corporate power create the conditions that made progressive reform necessary?' },
]

export default function APUSHU6T2() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 2, title: 'big business & gospel of wealth', keyTerms: ['trust', 'holding company', 'Standard Oil', 'laissez-faire', 'Social Darwinism', 'Homestead Strike', 'robber barons', 'captains of industry'] }}
      sections={sections}
      prev={{ href: '/apush/unit-6/1', title: 'industrialization & railroads' }}
      next={{ href: '/apush/unit-6/3', title: 'labor unions' }}
      courseHref="/apush" unitHref="/apush/unit-6"
    />
  )
}
