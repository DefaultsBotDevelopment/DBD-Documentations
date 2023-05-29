import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Fastest Customer Support',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: 'We are always here to help you with any issues you may have with our bot. We have a dedicated support team that is always ready to help you.',
	},
	{
		title: 'Custom Bots',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: 'We can make custom bots for you. We can make any bot you want, from a simple moderation bot to a complex bot with a dashboard.',
	},
	{
		title: 'Premium Bots and Services',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: 'We have premium bots and services that you can buy, built by our developers.',
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<Svg
					className={styles.featureSvg}
					role='img'
				/>
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature
							key={idx}
							{...props}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
