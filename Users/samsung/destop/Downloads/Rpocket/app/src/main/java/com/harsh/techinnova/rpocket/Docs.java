package com.harsh.techinnova.rpocket;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class Docs extends Activity implements View.OnClickListener {
Button button,button1;
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.docs);
        button= (Button) findViewById(R.id.button);
        button1= (Button) findViewById(R.id.button1);
        button.setOnClickListener(this);
        button1.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {

        switch (v.getId()) {
            case R.id.button:
                  // Instantiate the RequestQueue.
                RequestQueue queue = Volley.newRequestQueue(this);
                String url ="http://www.google.com";

  //************************* GET  REQUEST ************************//


              // Request a string response from the provided URL.
                StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                        new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {
                                // Display the first 500 characters of the response string.

                                Toast.makeText(getBaseContext(), "Response is: "+ response.substring(0,500), Toast.LENGTH_LONG).show();

                            }
                        }, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Toast.makeText(getBaseContext(), "ERROR", Toast.LENGTH_LONG).show();

                    }
                });
// Add the request to the RequestQueue.
                queue.add(stringRequest);
                break;



            //************************* POST  REQUEST ************************//

            case R.id.button1:

                // Instantiate the RequestQueue.
                RequestQueue queue1 = Volley.newRequestQueue(this);
                String url1 ="http://api.androidhive.info/volley/string_response.html";

                JsonObjectRequest jsonObjReq = new JsonObjectRequest(Request.Method.POST,
                        url1, null,
                        new Response.Listener<JSONObject>() {

                            @Override
                            public void onResponse(JSONObject response) {
                                Toast.makeText(getBaseContext(), "Response is: "+ response.toString(), Toast.LENGTH_LONG).show();
                            }
                        }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Toast.makeText(getBaseContext(), "ERROR", Toast.LENGTH_LONG).show();
                    }
                }) {

                    @Override
                    protected Map<String, String> getParams() {
                        Map<String, String> params = new HashMap<String, String>();
                        params.put("name", "Androidhive");
                        params.put("email", "abc@androidhive.info");
                        params.put("password", "password123");

                        return params;
                    }

                };

// Adding request to request queue
                queue1.add(jsonObjReq);




                break;

        }}

}