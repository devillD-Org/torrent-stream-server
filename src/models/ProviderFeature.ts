/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum ProviderFeature {
    Search = 'search'
}

export function ProviderFeatureFromJSON(json: any): ProviderFeature {
    return ProviderFeatureFromJSONTyped(json, false);
}

export function ProviderFeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderFeature {
    return json as ProviderFeature;
}

export function ProviderFeatureToJSON(value?: ProviderFeature | null): any {
    return value as any;
}
