import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/persik.png';
import './Persik.css';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Epic from "@vkontakte/vkui/dist/components/Epic/Epic";
import Tabbar from "@vkontakte/vkui/dist/components/Tabbar/Tabbar";
import TabbarItem from "@vkontakte/vkui/dist/components/TabbarItem/TabbarItem";
import { Icon24List } from '@vkontakte/icons';
import { Icon24HomeHeartOutline } from '@vkontakte/icons';
import { Icon24HelpOutline } from '@vkontakte/icons';
import { Icon28FireOutline } from '@vkontakte/icons';
import { Icon28WorkOutline } from '@vkontakte/icons';
const osName = platform();

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Главная
		</PanelHeader>
		<Group>
			<Cell>Здесь ничего нет. :(</Cell>
		</Group>
		<Epic>
			<Tabbar>
				<TabbarItem text={"Расписание"}><Icon24List /></TabbarItem>
				<TabbarItem text={"ДЗ"}><Icon24HomeHeartOutline /></TabbarItem>
				<TabbarItem text={"Долги"}><Icon24HelpOutline /></TabbarItem>
				<TabbarItem text={"Сессии"}><Icon28FireOutline width={24} height={24} /></TabbarItem>
				<TabbarItem text={"Работы"}><Icon28WorkOutline width={24} height={24} /></TabbarItem>
			</Tabbar>
		</Epic>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
