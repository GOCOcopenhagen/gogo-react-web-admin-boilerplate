import { createStyles, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Theme, Typography } from '@material-ui/core';
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react'
import { useHistory } from 'react-router-dom';
import { InputField } from '../../components/atoms/InputField';
import { DefaultButton } from '../../components/atoms/SampleButton';
import { CustomCard } from '../../components/molecules/Card';
import { ActivityList } from '../../components/organisms/ActivityList';
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomContainer, CustomSection, HorizontalFlexDivSpaceBetween, VerticalFlexDiv } from '../../components/templates/Wrappers';
import { routes } from '../../content/RootRoutes';
import { lightest } from '../../globals/colors';
import { companyNameAllCaps } from '../../globals/dk_names';


const fakeData = [
    {
        date: 'Marts 2021',
        activities: [
            {
                header: 'Page clicked',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '04/03/2021'
            },
            {
                header: 'Page opened',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '02/03/2021'
            },
        ]
    },
    {
        date: 'Februar 2021',
        activities: [
            {
                header: 'Notification sent',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '15/02/2021'
            },
            {
                header: 'Page loaded',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '23/02/2021'
            }
        ]
    },
    {
        date: 'Januar 2021',
        activities: [
            {
                header: 'Account signed in',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '06/01/2021'
            },
            {
                header: 'Account created',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '01/01/2021'
            }
        ]
    },
]



export const UserInfo: React.FC = () => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: any) => {
        if (event.target.value) setter(event.target.value)
    }


    return (
        <BodyWithTopBar>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20}}>
                <CustomSection container column>
                    <h1 style={{marginBottom: 10}}>Oliver Arnstein</h1>
                    <h2>Activity log</h2>
                    <ActivityList ActivityData={fakeData} />
                </CustomSection>
                <CustomSection style={{ margin: 0, marginRight: 30}} >
                    <VerticalFlexDiv>
                        <h2>User information</h2>
                        <CustomCard style={{width: 430}}>
                            <div style={{display: 'flex', flexDirection: 'column' }}>
                                <h5>Edit user information</h5>
                                <InputField placeholder='Username' variant='small' margin onChange={handleChange(setName)} />
                                <InputField placeholder='Email' variant='small' margin onChange={handleChange(setEmail)} />
                                <InputField placeholder='Password' variant='small' margin onChange={handleChange(setPassword)} />
                                <DefaultButton onClick={() => console.log("Changes saved")}>SAVE CHANGES</DefaultButton>

                            </div>
                        </CustomCard>
                    </VerticalFlexDiv>
                </CustomSection>
            </div>
        </BodyWithTopBar>
    )
}