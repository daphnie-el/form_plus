import React from 'react';
import { Grid, Card, Text, Box, Layout, Select } from './styles';
import icon from '../assets/icon.svg'

const data = [
    {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
        category: [
            "Education",
            "Health"
        ],
    },
    {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
        category: [
            "Education",
            "Health"
        ],
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
        category: [
            "Education",
            "Health"
        ],
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    }, {
        name :'Alumni Membership Form Template',
        description:'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
        link: 'https://formpl.us/templates',
    },
]

const Templates = (props) => {
    const options =[
        {
        label: 'All',
        value: '',
        }, {
            label: 'Education', value: 'Education',
        },
        {
            label: 'E-commerce', value: 'E-commerce',
        }, {
            label: 'Health', value: 'Health',
        }
    ];

    const dateCreated =[
        {
        label: 'Default',
        value: '',
        }, 
        {
            label: 'Ascending', value: 'Ascending',
        }, 
        {
            label: 'Descending', value: 'Descending',
        }
    ];

    const alphabeticalOrder =[
        {
        label: 'Default',
        value: '',
        }, 
        {
            label: 'Ascending', value: 'Ascending',
        }, 
        {
            label: 'Descending', value: 'Descending',
        }
    ];

    return (
        <Layout>
            <Grid default='55% 45%'>
               <input style={{width: '17.125rem'}} type='search' placeholder='Search Templates' />
                <Box display="flex"  style={{alignItems: 'center'}} justifyContent='space-between'>
                    <Text margin>Sort By:</Text>
                    <Select
                        label='test'
                        // options={options.map(item => {
                        //     return {
                        //         label: item.name && item.name,
                        //         value: item.id && item.id
                        //     }
                        // })}

                        options={options}

                    />
                    <Select
                        label='test'
                        options={options}
                    />
                    <Select
                        label='test'
                        options={options}
                    />
                </Box>
            </Grid> 
            <Box pad='0.9375rem 0'>
                <Box pad='0 0.625rem' bg='#FFF4EA' display="flex" justifyContent='center'>
                    <img src={icon} alt='info-icon'/>
                    <Text align='center' margin='0 0 0 0.9375rem' pad='0.9375rem 0'> 
                        Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates
                    </Text>                    
                </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' >
                <Text fontSize='1.125rem'>All Templates</Text>
                <Text>2000 template</Text>
            </Box>
            <Box>
                <Grid default='repeat(3, 1fr)' pad='1.875rem 0' gap='3.125rem'>
                    {
                        data && data.map((template, index) => {
                            return (
                                <Card
                                    key={index}
                                >
                                <Text pad='0 1.25rem' fontSize='1.5rem'>{template?.name}</Text>
                                <Text pad='0 1.25rem'>{template?.description}</Text>
                                <Box bg='#F9F9F9' height='2.5rem'>
                                    <Text pad='0.625rem 1.25rem'><a href={template?.link}>Use Template</a></Text>
                                </Box>
                                </Card>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Layout>
    )
}

export default Templates;