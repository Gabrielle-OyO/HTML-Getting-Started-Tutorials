package com.itany.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		String username=request.getParameter("username");
		String pwd=request.getParameter("pwd");
		
		response.setContentType("text/plain;charset=utf-8"); //也可指定为text/html
		PrintWriter out = response.getWriter();
		if("admin".equals(username)&&"123".equals(pwd)){
			out.print("ok");
		}else{
			out.print("no");
		}
		out.flush();
		out.close();
	}

}
