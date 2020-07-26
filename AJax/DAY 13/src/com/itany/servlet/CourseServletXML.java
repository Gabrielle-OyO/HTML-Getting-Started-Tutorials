package com.itany.servlet;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.XMLWriter;

import com.itany.dao.CourseDao;
import com.itany.entity.Course;
import com.itany.entity.TrainItem;
import com.itany.util.ObjectFactory;

public class CourseServletXML extends HttpServlet {
	
	private CourseDao courseDao=(CourseDao) ObjectFactory.getObject("courseDao");
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String flag=request.getParameter("flag");
		ByteArrayOutputStream baos=null;
		
		if("train".equals(flag)){ //根据培训项目查找对应的课程信息
			int itemId=Integer.parseInt(request.getParameter("itemId"));
			List<Course> list = courseDao.selectByItemId(itemId);
			baos=createXML(list);
		}else{ //根据课程编号查找课程详细信息
			int courseId=Integer.parseInt(request.getParameter("courseId"));
			Course course = courseDao.selectByCourseId(courseId);
			List<Course> list=new ArrayList<Course>();
			list.add(course);
			baos=createXML(list);
		}
		
		response.setContentType("text/xml;charset=utf8"); //指定响应数据类型为text/xml
		PrintWriter out = response.getWriter();
		out.print(baos);
		out.flush();
		out.close();
		
	}
	
	//创建XML文档
	public ByteArrayOutputStream createXML(List<Course> list) throws IOException{
		//使用dom4j创建XML文档，存储到输出流中
		Document document = DocumentHelper.createDocument();
		Element root = document.addElement("Courses");
		for (Course c : list) {
			Element course = root.addElement("Course");
			course.addElement("courseId").setText(c.getCourseId()+"");
			course.addElement("courseName").setText(c.getCourseName());
			course.addElement("period").setText(c.getPeriod()+"");
			course.addElement("details").setText(c.getDetails());
		}	
		ByteArrayOutputStream baos=new ByteArrayOutputStream();
		OutputFormat format=new OutputFormat("  ", true, "utf-8");
		XMLWriter xw=new XMLWriter(baos,format);
		xw.write(document);
		System.out.println(baos);
		return baos;
	}
}
