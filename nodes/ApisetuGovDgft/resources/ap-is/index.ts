import type { INodeProperties } from 'n8n-workflow';

export const apIsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					]
				}
			},
			"options": [
				{
					"name": "Importer Exporter Code Verification API",
					"value": "Importer Exporter Code Verification API",
					"action": "Importer-Exporter Code (IEC) Verification API.",
					"description": "Description of Importer-Exporter Code (IEC) Verification API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/iec/{{$parameter[\"iec\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/iec/{iec}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Importer Exporter Code Verification API"
					]
				}
			}
		},
		{
			"displayName": "Iec",
			"name": "iec",
			"required": true,
			"description": "Importer-Exporter code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Importer Exporter Code Verification API"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api_key (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Importer Exporter Code Verification API"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Importer Exporter Code Verification API"
					]
				}
			}
		},
];
