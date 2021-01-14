import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Icon24EducationOutline } from '@vkontakte/icons';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>EdList</PanelHeader>
		{fetchedUser &&
		<Group>
			<Cell
				before={<Icon24EducationOutline
					width={28}
					height={28}
				/>}
				description={"Добро пожаловать в приложение!"}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		<Group>
			<Cell multiline={true}>
				Универсальное, разработанное на платформе VK Mini Apps приложение <b>EdList</b> помогает хранить расписание уроков, домашнее задание, долги по учебе, даты сессий и важных работ.
			</Cell>
		</Group>
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" mode={"commerce"} onClick={go} data-to="persik">
					Войти
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
