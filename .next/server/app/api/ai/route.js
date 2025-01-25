"use strict";(()=>{var e={};e.id=252,e.ids=[252],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},1428:(e,t,n)=>{n.r(t),n.d(t,{headerHooks:()=>er,originalPathname:()=>ec,patchFetch:()=>ed,requestAsyncStorage:()=>eo,routeModule:()=>es,serverHooks:()=>ea,staticGenerationAsyncStorage:()=>ei,staticGenerationBailout:()=>el});var s,o,i,a,r,l,c,d,u,h,f,p,g={};n.r(g),n.d(g,{GET:()=>en});var m=n(5419),y=n(9108),E=n(9678);(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(s||(s={})),function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"}(o||(o={})),function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"}(i||(i={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C=["user","model","function","system"];(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(a||(a={})),function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"}(r||(r={})),function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"}(l||(l={})),function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"}(c||(c={})),function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER"}(d||(d={})),function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"}(u||(u={})),function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"}(h||(h={})),function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"}(f||(f={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class O extends v{constructor(e,t){super(e),this.response=t}}class S extends v{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class _ extends v{}!function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"}(p||(p={}));class w{constructor(e,t,n,s,o){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",s=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",o=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function A(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(e){throw new _(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${e.message}`)}for(let[e,t]of s.entries()){if("x-goog-api-key"===e)throw new _(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new _(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function I(e,t,n,s,o,i){let a=new w(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await A(a),body:o})}}async function T(e,t,n,s,o,i={},a=fetch){let{url:r,fetchOptions:l}=await I(e,t,n,s,o,i);return N(r,l,a)}async function N(e,t,n=fetch){let s;try{s=await n(e,t)}catch(t){(function(e,t){let n=e;throw e instanceof S||e instanceof _||((n=new v(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n})(t,e)}return s.ok||await R(s,e),s}async function R(e,t){let n,s="";try{let t=await e.json();s=t.error.message,t.error.details&&(s+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new S(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${s}`,e.status,e.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),U(e.candidates[0]))throw new O(`${H(e)}`,e);return function(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new O(`Text not available. ${H(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),U(e.candidates[0]))throw new O(`${H(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),x(e)[0]}if(e.promptFeedback)throw new O(`Function call not available. ${H(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),U(e.candidates[0]))throw new O(`${H(e)}`,e);return x(e)}if(e.promptFeedback)throw new O(`Function call not available. ${H(e)}`,e)},e}function x(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}let M=[d.RECITATION,d.SAFETY,d.LANGUAGE];function U(e){return!!e.finishReason&&M.includes(e.finishReason)}function H(e){var t,n,s;let o="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];U(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}return o}function D(e){return this instanceof D?(this.v=e,this):new D(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function $(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return b(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let s={};for(let o of e.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),o.executableCode&&(s.executableCode=o.executableCode),o.codeExecutionResult&&(s.codeExecutionResult=o.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[t].content.parts.push(s)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t,n,s){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function s(){return t.read().then(({value:t,done:o})=>{let i;if(o){if(n.trim()){e.error(new v("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(k);for(;a;){try{i=JSON.parse(a[1])}catch(t){e.error(new v(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(i),a=(n=n.substring(a[0].length)).match(k)}return s()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(e,t||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(e){o[e]&&(s[e]=function(t){return new Promise(function(n,s){i.push([e,t,n,s])>1||r(e,t)})})}function r(e,t){try{var n;(n=o[e](t)).value instanceof D?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield D(t.read());if(n)break;yield yield D(b(e))}})}(t),response:$(n)}}(await T(t,p.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s))}async function P(e,t,n,s){let o=await T(t,p.GENERATE_CONTENT,e,!1,JSON.stringify(n),s);return{response:b(await o.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function F(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,o=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new v("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new v("No content is provided for sending chat message.");return s?t:n}(t)}function G(e){let t;return t=e.contents?e:{contents:[F(e)]},e.systemInstruction&&(t.systemInstruction=L(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],B={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},Y="SILENT_ERROR";class K{constructor(e,t,n,s={}){this.model=t,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:s}=n;if(!t&&"user"!==e)throw new v(`First content should be with role 'user', got ${e}`);if(!C.includes(e))throw new v(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(C)}`);if(!Array.isArray(s))throw new v("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new v("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of s)for(let t of q)t in e&&(o[t]+=1);let i=B[e];for(let t of q)if(!i.includes(t)&&o[t]>0)throw new v(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,s,o,i,a,r;let l;await this._sendPromise;let c=F(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>P(this._apiKey,this.model,d,u)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=H(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,s,o,i,a,r;await this._sendPromise;let l=F(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=j(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(Y)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=H(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==Y&&console.error(e)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n,s){return(await T(t,p.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t,n,s){return(await T(t,p.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function W(e,t,n,s){let o=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await T(t,p.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=L(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let s=G(e),o=Object.assign(Object.assign({},this._requestOptions),t);return P(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(e,t={}){var n;let s=G(e),o=Object.assign(Object.assign({},this._requestOptions),t);return j(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(e){var t;return new K(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let s={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},o=null!=e.generateContentRequest;if(e.contents){if(o)throw new _("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{let t=F(e);s.contents=[t]}return{generateContentRequest:s}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return J(this.apiKey,this.model,n,s)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:F(e)}:e,s=Object.assign(Object.assign({},this._requestOptions),t);return V(this.apiKey,this.model,n,s)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return W(this.apiKey,this.model,e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new v("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new X(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new _("Cached content must contain a `name` field.");if(!e.model)throw new _("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new _(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let s=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new X(this.apiKey,s,n)}}var Q=n(6758),Z=n(8822),ee=n(7896);let et=new z(process.env.GEMINI_API_KEY).getGenerativeModel({model:"gemini-1.5-flash"});async function en(e){let t=(0,Q.Qc)(e.headers.get("cookie")||""),n=t.conversationHistory?JSON.parse(t.conversationHistory):[],s=e.nextUrl.searchParams.get("question")||"Start the conversation",o=(0,ee.is)(),i=n.length?n.map(({user:e,assistant:t})=>`User: ${e}
Assistant: ${t}`).join("\n"):"No previous conversation.",a=`
You are an advanced English learning assistant tasked with helping users clarify doubts after they have completed their online lessons. Your goal is to ensure they understand the concepts fully, offering clear, concise, and helpful answers. Respond in a natural and conversational tone, while being specific to the student's needs. Use the following structure for your responses:

{
  "ReplyForUser": "<The assistant's reply in natural, conversational language, limited to 50-200(200 max) characters per part>",
  "AllSummaryHistory": "<Updated all-summary-history by keeping in mind the users current All Summary History and currenthistory>",
}
  
-Make sure the student feels supported and confident as they continue their learning journey.
-Use the user's name and other information to personalize the conversation.
-Use simple language and avoid jargon to ensure the user understands the response.
-Remember to keep the conversation focused on the user's needs and goals.
-Be patient and encouraging, providing clear explanations and examples when needed.
-Use positive reinforcement to motivate the user and build their confidence.
-Encourage the user to ask questions and seek help when needed.
-End the conversation on a positive note, encouraging the user to continue learning.
-Be empathetic and understanding, acknowledging the user's efforts and progress.
-Use active listening to ensure you understand the user's questions and concerns.
-Be respectful and professional in your interactions with the user.
-Remember to keep the conversation engaging and interactive to maintain the user's interest.
-Use humor and creativity to make the conversation enjoyable and memorable.
-Encourage the user to practice and apply what they have learned in real-life situations.
-Use examples and scenarios to illustrate key concepts and reinforce learning.
-Be flexible and adaptable in your responses to meet the user's unique needs and preferences.
-Use positive language and tone to motivate and inspire the user to achieve their goals.
-make that you dont repeat the same thing again and again
-also make sure that you dont give user greetings again and again only once in the starting of the conversation(check the current history for that)

## User Information:
- Name: ${o.name}
- Age: ${o.age}
- Highest Education: ${o.highestEducation}

- Current History: ${i||"No recent activity"}
- All Summary History: ${""===o.allHistorySummary?o.allHistorySummary:"No History"}

**User’s Current Reply or Question**:
User - ${s}
`;console.log("history ->",o.allHistorySummary),console.log("checklist day ->",Math.ceil((new Date-new Date(o.createdAt))/864e5)+1);try{let e;let t=await et.generateContent(a);try{e=JSON.parse(t.response.candidates[0].content.parts[0].text.replace(/```json|```/g,"").trim())}catch(e){throw Error("Failed to parse AI response JSON")}n.push({user:s,assistant:e.ReplyForUser});let i=[(0,Q.qC)("conversationHistory",JSON.stringify(n),{path:"/"})].join("; ");return o.checklist=e.ChecklistDay,o.allHistorySummary=e.AllSummaryHistory,(0,Z.updateUserHistory)(o._id,o.allHistorySummary),(0,ee.gt)(o),new Response(JSON.stringify({result:e}),{headers:{"Content-Type":"application/json","Set-Cookie":i}})}catch(e){return console.error("Error generating content:",e),new Response(JSON.stringify({error:"Failed to generate response"}),{status:500,headers:{"Content-Type":"application/json"}})}}let es=new m.AppRouteRouteModule({definition:{kind:y.x.APP_ROUTE,page:"/api/ai/route",pathname:"/api/ai",filename:"route",bundlePath:"app/api/ai/route"},resolvedPagePath:"C:\\Users\\kunal\\OneDrive\\Desktop\\test2\\3D-English-Teacher\\src\\app\\api\\ai\\route.js",nextConfigOutput:"",userland:g}),{requestAsyncStorage:eo,staticGenerationAsyncStorage:ei,serverHooks:ea,headerHooks:er,staticGenerationBailout:el}=es,ec="/api/ai/route";function ed(){return(0,E.patchFetch)({serverHooks:ea,staticGenerationAsyncStorage:ei})}},6758:(e,t)=>{t.Qc=function(e,t){let n=new r,s=e.length;if(s<2)return n;let o=t?.decode||d,i=0;do{let t=e.indexOf("=",i);if(-1===t)break;let a=e.indexOf(";",i),r=-1===a?s:a;if(t>r){i=e.lastIndexOf(";",t-1)+1;continue}let d=l(e,i,t),u=c(e,t,d),h=e.slice(d,u);if(void 0===n[h]){let s=l(e,t+1,r),i=c(e,r,s),a=o(e.slice(s,i));n[h]=a}i=r+1}while(i<s);return n},t.qC=function(e,t,r){let l=r?.encode||encodeURIComponent;if(!n.test(e))throw TypeError(`argument name is invalid: ${e}`);let c=l(t);if(!s.test(c))throw TypeError(`argument val is invalid: ${t}`);let d=e+"="+c;if(!r)return d;if(void 0!==r.maxAge){if(!Number.isInteger(r.maxAge))throw TypeError(`option maxAge is invalid: ${r.maxAge}`);d+="; Max-Age="+r.maxAge}if(r.domain){if(!o.test(r.domain))throw TypeError(`option domain is invalid: ${r.domain}`);d+="; Domain="+r.domain}if(r.path){if(!i.test(r.path))throw TypeError(`option path is invalid: ${r.path}`);d+="; Path="+r.path}if(r.expires){var u;if(u=r.expires,"[object Date]"!==a.call(u)||!Number.isFinite(r.expires.valueOf()))throw TypeError(`option expires is invalid: ${r.expires}`);d+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(d+="; HttpOnly"),r.secure&&(d+="; Secure"),r.partitioned&&(d+="; Partitioned"),r.priority)switch("string"==typeof r.priority?r.priority.toLowerCase():void 0){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw TypeError(`option priority is invalid: ${r.priority}`)}if(r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"none":d+="; SameSite=None";break;default:throw TypeError(`option sameSite is invalid: ${r.sameSite}`)}return d};let n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,r=(()=>{let e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{let n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){let n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function d(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},5419:(e,t,n)=>{e.exports=n(517)},5109:(e,t,n)=>{n.d(t,{v:()=>a});var s=n(1185),o=n.n(s);let i=global.mongoose;async function a(){return i.conn||(i.promise||(i.promise=o().connect("mongodb+srv://database_creators:GjSWaV7mJnOy5hJw@cluster0.lwyhn.mongodb.net/userdata").then(e=>e)),i.conn=await i.promise),i.conn}i||(i=global.mongoose={conn:null,promise:null})},7896:(e,t,n)=>{n.d(t,{gt:()=>r,is:()=>l});var s=n(7147),o=n.n(s),i=n(1017);let a=n.n(i)().join(process.cwd(),"src","app","storage","userData.json");function r(e){o().writeFileSync(a,JSON.stringify(e,null,2),"utf8"),console.log("saved")}function l(){return o().existsSync(a)?JSON.parse(o().readFileSync(a,"utf8")):null}},744:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(1185),o=n.n(s);let i=new(o()).Schema({name:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},age:{type:Number},highestEducation:{type:String},checklist:{type:String,default:""},allHistorySummary:{type:String,default:""}},{timestamps:!0}),a=o().models.User||o().model("User",i)},8822:(e,t,n)=>{n.r(t),n.d(t,{updateUserHistory:()=>i});var s=n(5109),o=n(744);async function i(e,t){try{await (0,s.v)();let n=await o.Z.findByIdAndUpdate(e,{allHistorySummary:t},{new:!0});if(!n)throw Error("User not found");return{success:!0,user:n}}catch(e){return console.error("Error updating user history:",e),{success:!1,error:e.message}}}}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[638],()=>n(1428));module.exports=s})();