import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovDgftApi implements ICredentialType {
        name = 'N8nDevApisetuGovDgftApi';

        displayName = 'Apisetu Gov Dgft API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovDgft/apisetu-gov-dgft.svg', dark: 'file:../nodes/ApisetuGovDgft/apisetu-gov-dgft.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/dgft',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/dgft',
                        description: 'The base URL of your Apisetu Gov Dgft API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
