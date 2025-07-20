import { redirect } from "next/dist/server/api-utils";
import { Yellowtail } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				orange: {
					'50': '#fdf8ed',
					'100': '#f9ebcc',
					'200': '#f3d594',
					'300': '#ecba5d',
					'400': '#e7a034',
					'500': '#e08220',
					'600': '#c66219',
					'700': '#a44519',
					'800': '#86361a',
					'900': '#6e2e19',
					'950': '#3f1609',
				},
				green: {
					'50': '#f4f9f4',
					'100': '#e9f1e7',
					'200': '#d1e3cf',
					'300': '#abcda8',
					'400': '#80ad7b',
					'500': '#5d8f58',
					'600': '#497544',
					'700': '#375634',
					'800': '#324b30',
					'900': '#2b3e29',
					'950': '#132112',
				},
				yellowgreen: {
					'50': '#fcfee7',
					'100': '#f7fccb',
					'200': '#eff99d',
					'300': '#e4f47b',
					'400': '#cce635',
					'500': '#afcc16',
					'600': '#88a30d',
					'700': '#677c0f',
					'800': '#526212',
					'900': '#455314',
					'950': '#242e05',
				},
				blue: {
					'50': '#f1f9fa',
					'100': '#dbeef2',
					'200': '#bcdde5',
					'300': '#8dc4d3',
					'400': '#57a2b9',
					'500': '#3c869e',
					'600': '#356f88',
					'700': '#305a6e',
					'800': '#2e4c5c',
					'900': '#2a414f',
					'950': '#182934',
				},
				bluegreen: {
					'50': '#f1fcfa',
					'100': '#d0f7f3',
					'200': '#a1eee6',
					'300': '#6aded7',
					'400': '#3cc5c1',
					'500': '#24b2b0',
					'600': '#198788',
					'700': '#186c6d',
					'800': '#185557',
					'900': '#184749',
					'950': '#08292b',
				},
				pink: {
					'50': '#fbf4f8',
					'100': '#f9eaf2',
					'200': '#f4d6e6',
					'300': '#edbad4',
					'400': '#df87b2',
					'500': '#d16395',
					'600': '#be4476',
					'700': '#a3335e',
					'800': '#872d4e',
					'900': '#722944',
					'950': '#441324',
				},
				blueviolet: {
					'50': '#eff2fe',
					'100': '#e3e6fc',
					'200': '#ccd2f9',
					'300': '#acb4f5',
					'400': '#8b8dee',
					'500': '#746fe5',
					'600': '#6454d7',
					'700': '#5744be',
					'800': '#473a99',
					'900': '#413983',
					'950': '#251f47',
				},
				violet: {
					'50': '#f9f6f8',
					'100': '#f4eff2',
					'200': '#ebdfe7',
					'300': '#dcc5d2',
					'400': '#c5a1b6',
					'500': '#b1839d',
					'600': '#9a6881',
					'700': '#82546a',
					'800': '#6d4758',
					'900': '#5c3f4d',
					'950': '#452b37',
				},
				brown: {
					'50': '#faf5f2',
					'100': '#f4e9e0',
					'200': '#e8d0c0',
					'300': '#d9b298',
					'400': '#c98d6e',
					'500': '#be7151',
					'600': '#b05e46',
					'700': '#994e3e',
					'800': '#773e35',
					'900': '#60352e',
					'950': '#331a17',
				},
				champagne: {
					'50': '#f7f4f3',
					'100': '#e8e2dd',
					'200': '#d0c1b7',
					'300': '#b7a092',
					'400': '#a78878',
					'500': '#997367',
					'600': '#8b635c',
					'700': '#714e4c',
					'800': '#5e4242',
					'900': '#4f3839',
					'950': '#2b1d1d',
				},

				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				},
				sidebar: {
					DEFAULT: 'var(--sidebar-background)',
					foreground: 'var(--sidebar-foreground)',
					primary: 'var(--sidebar-primary)',
					'primary-foreground': 'var(--sidebar-primary-foreground)',
					accent: 'var(--sidebar-accent)',
					'accent-foreground': 'var(--sidebar-accent-foreground)',
					border: 'var(--sidebar-border)',
					ring: 'var(--sidebar-ring)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
};
export default config;
