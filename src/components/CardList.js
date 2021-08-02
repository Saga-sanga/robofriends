import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error('Noooooo!');
  // }
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={robots[i].id} 
							id={user.id} 
							name={user.name} 
							email={robots[i].email}
						/>
					);	
				})
			}
		</div>
	);
}

export default CardList;